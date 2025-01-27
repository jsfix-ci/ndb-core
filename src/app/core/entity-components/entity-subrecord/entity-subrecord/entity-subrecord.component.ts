import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatSort, MatSortable } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Entity, EntityConstructor } from "../../../entity/model/entity";
import { AlertService } from "../../../alerts/alert.service";
import { Subscription } from "rxjs";
import { FormFieldConfig } from "../../entity-form/entity-form/FormConfig";
import {
  EntityForm,
  EntityFormService,
} from "../../entity-form/entity-form.service";
import { MatDialog } from "@angular/material/dialog";
import { LoggingService } from "../../../logging/logging.service";
import { AnalyticsService } from "../../../analytics/analytics.service";
import { RowDetailsComponent } from "../row-details/row-details.component";
import {
  EntityRemoveService,
  RemoveResult,
} from "../../../entity/entity-remove.service";
import { EntityMapperService } from "../../../entity/entity-mapper.service";
import { tableSort } from "./table-sort";

export interface TableRow<T extends Entity> {
  record: T;
  formGroup?: EntityForm<T>;
}

/**
 * Generically configurable component to display and edit a list of entities in a compact way
 * that can especially be used within another entity's details view to display related entities.
 *
 * For example, all Notes related to a certain Child are displayed within the Child's detail view
 * with the help of this component.
 *
 * Pagination is available, but the values are not stored. That means that every time calling
 * the component pagination starts with the initial values set in this component.
 *
 * A detailed Guide on how to use this component is available:
 * - [How to display related entities]{@link /additional-documentation/how-to-guides/display-related-entities.html}
 */
@UntilDestroy()
@Component({
  selector: "app-entity-subrecord",
  templateUrl: "./entity-subrecord.component.html",
  styleUrls: ["./entity-subrecord.component.scss"],
})
export class EntitySubrecordComponent<T extends Entity>
  implements OnChanges, OnInit
{
  @Input() isLoading: boolean;

  /** configuration what kind of columns to be generated for the table */
  @Input() set columns(columns: (FormFieldConfig | string)[]) {
    this._columns = columns.map((col) => {
      if (typeof col === "string") {
        return { id: col };
      } else {
        return col;
      }
    });
    this.filteredColumns = this._columns.filter((col) => !col.hideFromTable);
  }
  _columns: FormFieldConfig[] = [];
  filteredColumns: FormFieldConfig[] = [];

  /** data to be displayed */
  @Input()
  set records(value: Array<T>) {
    this._records = value;
    this.recordsDataSource.data = this._records.map((rec) => {
      return {
        record: rec,
      };
    });
    if (!this.newRecordFactory && this._records.length > 0) {
      this.newRecordFactory = () =>
        new (this._records[0].getConstructor() as EntityConstructor<T>)();
    }
  }
  private _records: Array<T> = [];

  /**
   * factory method to create a new instance of the displayed Entity type
   * used when the user adds a new entity to the list.
   */
  @Input() newRecordFactory: () => T;

  /**
   * Whether the rows of the table are inline editable and new entries can be created through the "+" button.
   */
  @Input() editable = true;

  /** columns displayed in the template's table */
  @Input() columnsToDisplay = [];

  /** data displayed in the template's table */
  recordsDataSource = new MatTableDataSource<TableRow<T>>();

  private mediaSubscription: Subscription;
  private screenWidth = "";

  idForSavingPagination = "startWert";

  @ViewChild(MatSort) set sort(matSort: MatSort) {
    // Initialize sort once available
    this.recordsDataSource.sort = matSort;
    setTimeout(() => this.initDefaultSort());
  }

  get sort(): MatSort {
    return this.recordsDataSource.sort;
  }

  /**
   * A function which should be executed when a row is clicked or a new entity created.
   * @param entity The newly created or clicked entity.
   */
  @Input() showEntity?: (entity: T) => void = this.showRowDetails;

  constructor(
    private alertService: AlertService,
    private media: MediaObserver,
    private entityFormService: EntityFormService,
    private dialog: MatDialog,
    private analyticsService: AnalyticsService,
    private loggingService: LoggingService,
    private entityRemoveService: EntityRemoveService,
    private entityMapper: EntityMapperService
  ) {
    this.mediaSubscription = this.media
      .asObservable()
      .pipe(untilDestroyed(this))
      .subscribe((change: MediaChange[]) => {
        if (change[0].mqAlias !== this.screenWidth) {
          this.screenWidth = change[0].mqAlias;
          this.setupTable();
        }
      });
  }

  /** function returns the background color for each row*/
  @Input() getBackgroundColor?: (rec: T) => string = (rec: T) => rec.getColor();

  ngOnInit() {
    if (this.entityConstructorIsAvailable()) {
      this.entityMapper
        .receiveUpdates(this.getEntityConstructor())
        .pipe(untilDestroyed(this))
        .subscribe(({ entity, type }) => {
          if (type === "new") {
            this.addToTable(entity);
          } else if (type === "remove") {
            this.removeFromDataTable(entity);
          } else if (
            type === "update" &&
            !this._records.find((rec) => rec.getId() === entity.getId())
          ) {
            this.addToTable(entity);
          }
        });
    }
  }

  private entityConstructorIsAvailable(): boolean {
    return this._records.length > 0 || !!this.newRecordFactory;
  }

  getEntityConstructor(): EntityConstructor<T> {
    if (this.entityConstructorIsAvailable()) {
      const record =
        this._records.length > 0 ? this._records[0] : this.newRecordFactory();
      return record.getConstructor() as EntityConstructor<T>;
    } else {
      throw new Error("No constructor is available");
    }
  }

  /**
   * Update the component if any of the @Input properties were changed from outside.
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty("columns")) {
      this.initFormGroups();
    }
    if (changes.hasOwnProperty("records") && this._records.length > 0) {
      this.initFormGroups();
      if (this.columnsToDisplay.length < 2) {
        this.setupTable();
      }
      this.initDefaultSort();
    }
    if (changes.hasOwnProperty("columnsToDisplay")) {
      this.mediaSubscription.unsubscribe();
    }
  }

  private initFormGroups() {
    if (this.entityConstructorIsAvailable()) {
      try {
        this.entityFormService.extendFormFieldConfig(
          this._columns,
          this.getEntityConstructor(),
          true
        );
        this.idForSavingPagination = this._columns
          .map((col) => (typeof col === "object" ? col.id : col))
          .join("");
      } catch (err) {
        this.loggingService.warn(`Error creating form definitions: ${err}`);
      }
    }
  }

  private initDefaultSort() {
    this.recordsDataSource.sortData = (data, sort) =>
      tableSort(data, {
        active: sort.active as keyof T | "",
        direction: sort.direction,
      });
    if (!this.sort || this.sort.active) {
      // do not overwrite existing sort
      return;
    }

    // initial sorting by first column, ensure that not the 'action' column is used
    const sortBy =
      this.columnsToDisplay[0] === "actions"
        ? this.columnsToDisplay[1]
        : this.columnsToDisplay[0];
    const sortByColumn = this._columns.find((c) => c.id === sortBy);
    let sortDirection = "asc";
    if (
      sortByColumn?.view === "DisplayDate" ||
      sortByColumn?.edit === "EditDate"
    ) {
      // flip default sort order for dates (latest first)
      sortDirection = "desc";
    }

    this.sort.sort({
      id: sortBy,
      start: sortDirection,
    } as MatSortable);
  }

  edit(row: TableRow<T>) {
    if (this.media.isActive("lt-sm")) {
      this.rowClick(row);
    } else {
      if (!row.formGroup) {
        row.formGroup = this.entityFormService.createFormGroup(
          this._columns,
          row.record
        );
      }
      row.formGroup.enable();
    }
  }

  /**
   * Save an edited record to the database (if validation succeeds).
   * @param row The entity to be saved.
   */
  async save(row: TableRow<T>): Promise<void> {
    try {
      row.record = await this.entityFormService.saveChanges(
        row.formGroup,
        row.record
      );
      row.formGroup.disable();
    } catch (err) {
      this.alertService.addDanger(err.message);
    }
  }

  /**
   * Discard any changes to the given entity and reset it to the state before the user started editing.
   * @param row The entity to be reset.
   */
  resetChanges(row: TableRow<T>) {
    row.formGroup = null;
  }

  /**
   * Delete the given entity from the database (after explicit user confirmation).
   * @param row The entity to be deleted.
   */
  delete(row: TableRow<T>) {
    this.entityRemoveService
      .remove(row.record, {
        deletedEntityInformation: $localize`:Record deleted info:Record deleted`,
        dialogText: $localize`:Delete confirmation message:Are you sure you want to delete this record?`,
      })
      .subscribe((result) => {
        switch (result) {
          case RemoveResult.REMOVED:
            this.removeFromDataTable(row.record);
            break;
          case RemoveResult.UNDONE:
            this._records.unshift(row.record);
            this.initFormGroups();
        }
      });
  }

  private removeFromDataTable(deleted: T) {
    // use setter so datasource is also updated
    this.records = this._records.filter(
      (rec) => rec.getId() !== deleted.getId()
    );
  }

  private addToTable(record: T) {
    // use setter so datasource is also updated
    this.records = [record].concat(this._records);
  }

  /**
   * Create a new entity.
   * The entity is only written to the database when the user saves this record which is newly added in edit mode.
   */
  create() {
    const newRecord = this.newRecordFactory();
    this.showEntity(newRecord);
    this.analyticsService.eventTrack("subrecord_add_new", {
      category: newRecord.getType(),
    });
  }

  /**
   * Show one record's details in a modal dialog (if configured).
   * @param row The entity whose details should be displayed.
   */
  rowClick(row: TableRow<T>) {
    if (!row.formGroup || row.formGroup.disabled) {
      this.showEntity(row.record);
      this.analyticsService.eventTrack("subrecord_show_popup", {
        category: row.record.getType(),
      });
    }
  }

  private showRowDetails(entity: T) {
    const columnsToDisplay = this._columns
      .filter((col) => col.edit)
      .map((col) => Object.assign({}, col, { forTable: false }));
    this.dialog.open(RowDetailsComponent, {
      width: "80%",
      maxHeight: "90vh",
      data: {
        entity: entity,
        columns: columnsToDisplay,
        viewOnlyColumns: this._columns.filter((col) => !col.edit),
      },
    });
  }

  /**
   * resets columnsToDisplay depending on current screensize
   */
  private setupTable() {
    if (this._columns !== undefined && this.screenWidth !== "") {
      this.columnsToDisplay = this._columns
        .filter((col) => this.isVisible(col))
        .map((col) => col.id);
      this.columnsToDisplay.unshift("actions");
    }
  }

  /**
   * isVisible
   * compares the current screensize to the columns' property visibleFrom. screensize < visibleFrom? column not displayed
   * @param col column that is checked
   * @return returns true if column is visible
   */
  private isVisible(col: FormFieldConfig): boolean {
    if (col.hideFromTable) {
      return false;
    }
    const visibilityGroups = ["sm", "md", "lg", "xl"];
    const visibleFromIndex = visibilityGroups.indexOf(col.visibleFrom);
    if (visibleFromIndex !== -1) {
      const regex = visibilityGroups.slice(visibleFromIndex).join("|");
      return !!this.screenWidth.match(regex);
    } else {
      return true;
    }
  }
}
