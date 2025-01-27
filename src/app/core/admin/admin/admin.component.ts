import { Component, OnInit } from "@angular/core";
import { AppConfig } from "../../app-config/app-config";
import { AlertService } from "../../alerts/alert.service";
import { Alert } from "../../alerts/alert";
import { BackupService } from "../services/backup.service";
import { ConfirmationDialogService } from "../../confirmation-dialog/confirmation-dialog.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ChildPhotoUpdateService } from "../services/child-photo-update.service";
import { ConfigService } from "../../config/config.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { readFile } from "../../../utils/utils";
import { RouteTarget } from "../../../app.routing";
import { Database } from "../../database/database";

/**
 * Admin GUI giving administrative users different options/actions.
 */
@UntilDestroy()
@RouteTarget("Admin")
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  /** app-wide configuration */
  appConfig = AppConfig.settings;

  /** all alerts */
  alerts: Alert[];

  constructor(
    private alertService: AlertService,
    private backupService: BackupService,
    private db: Database,
    private confirmationDialog: ConfirmationDialogService,
    private snackBar: MatSnackBar,
    private childPhotoUpdateService: ChildPhotoUpdateService,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.alerts = this.alertService.alerts;
  }

  /**
   * Trigger an automatic detection & update of Child entities' photo filenames.
   */
  updatePhotoFilenames() {
    this.childPhotoUpdateService.updateChildrenPhotoFilenames();
  }

  /**
   * Send a reference of the PouchDB to the browser's developer console for real-time debugging.
   */
  debugDatabase() {
    console.log(this.db);
  }

  /**
   * Download a full backup of the database as (json) file.
   */
  async saveBackup() {
    const backup = await this.backupService.getJsonExport();
    this.startDownload(backup, "text/json", "backup.json");
  }

  /**
   * Download a full export of the database as csv file.
   */
  async saveCsvExport() {
    const csv = await this.backupService.getCsvExport();
    this.startDownload(csv, "text/csv", "export.csv");
  }

  downloadConfigClick() {
    const configString = this.configService.exportConfig();
    this.startDownload(configString, "text/json", "config.json");
  }

  async uploadConfigFile(inputEvent: Event) {
    const loadedFile = await readFile(this.getFileFromInputEvent(inputEvent));
    await this.configService.saveConfig(JSON.parse(loadedFile));
  }

  private startDownload(data: string, type: string, name: string) {
    const tempLink = document.createElement("a");
    tempLink.href =
      "data:" + type + ";charset=utf-8," + encodeURIComponent(data);
    tempLink.target = "_blank";
    tempLink.download = name;
    tempLink.click();
  }

  /**
   * Reset the database to the state from the loaded backup file.
   * @param inputEvent for the input where a file has been selected
   */
  async loadBackup(inputEvent: Event) {
    const restorePoint = await this.backupService.getJsonExport();
    const newData = await readFile(this.getFileFromInputEvent(inputEvent));

    const confirmed = await this.confirmationDialog.getConfirmation(
      `Overwrite complete database?`,
      `Are you sure you want to restore this backup? This will
      delete all ${JSON.parse(restorePoint).length} existing records,
      restoring ${JSON.parse(newData).length} records from the loaded file.`
    );

    if (!confirmed) {
      return;
    }

    await this.backupService.clearDatabase();
    await this.backupService.importJson(newData, true);

    const snackBarRef = this.snackBar.open(`Backup restored`, "Undo", {
      duration: 8000,
    });
    snackBarRef
      .onAction()
      .pipe(untilDestroyed(this))
      .subscribe(async () => {
        await this.backupService.clearDatabase();
        await this.backupService.importJson(restorePoint, true);
      });
  }

  private getFileFromInputEvent(inputEvent: Event): Blob {
    const target = inputEvent.target as HTMLInputElement;
    return target.files[0];
  }

  /**
   * Reset the database removing all entities except user accounts.
   */
  async clearDatabase() {
    const restorePoint = await this.backupService.getJsonExport();

    const confirmed = await this.confirmationDialog.getConfirmation(
      `Empty complete database?`,
      `Are you sure you want to clear the database? This will delete all existing records in the database!`
    );

    if (!confirmed) {
      return;
    }

    await this.backupService.clearDatabase();

    const snackBarRef = this.snackBar.open(`Import completed`, "Undo", {
      duration: 8000,
    });
    snackBarRef
      .onAction()
      .pipe(untilDestroyed(this))
      .subscribe(async () => {
        await this.backupService.importJson(restorePoint, true);
      });
  }
}
