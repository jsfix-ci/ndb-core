import { Component } from "@angular/core";
import { OnInitDynamicComponent } from "../../../view/dynamic-components/on-init-dynamic-component.interface";
import { PanelConfig } from "../EntityDetailsConfig";
import { Entity } from "../../../entity/model/entity";
import { FormFieldConfig } from "../../entity-form/entity-form/FormConfig";
import { getParentUrl } from "../../../../utils/utils";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { DynamicComponent } from "../../../view/dynamic-components/dynamic-component.decorator";

/**
 * A simple wrapper function of the EntityFormComponent which can be used as a dynamic component
 * e.g. as a panel for the EntityDetailsComponent.
 */
@DynamicComponent("Form")
@Component({
  selector: "app-form",
  template: ` <app-entity-form
    [entity]="entity"
    [columns]="columns"
    [columnHeaders]="headers"
    [editing]="creatingNew"
    (save)="saveClicked($event)"
    (cancel)="cancelClicked()"
  ></app-entity-form>`,
})
export class FormComponent implements OnInitDynamicComponent {
  entity: Entity;
  columns: FormFieldConfig[][] = [];
  headers?: string[] = [];
  creatingNew = false;

  constructor(private router: Router, private location: Location) {}

  onInitFromDynamicConfig(config: PanelConfig) {
    this.entity = config.entity;
    this.columns = config.config?.cols;
    this.headers = config.config?.headers;
    if (config.creatingNew) {
      this.creatingNew = true;
    }
  }

  saveClicked(entity: Entity) {
    if (this.creatingNew) {
      this.router.navigate([getParentUrl(this.router), entity.getId()]);
    }
  }

  cancelClicked() {
    if (this.creatingNew) {
      this.location.back();
    }
  }
}
