import { Component } from "@angular/core";
import { EditComponent, EditPropertyConfig } from "../edit-component";
import { CustomNumberValidators } from "../../../../../utils/custom-number-validators";
import { DynamicComponent } from "../../../../view/dynamic-components/dynamic-component.decorator";

@DynamicComponent("EditNumber")
@Component({
  selector: "app-edit-number",
  templateUrl: "./edit-number.component.html",
  styleUrls: ["./edit-number.component.scss"],
})
export class EditNumberComponent extends EditComponent<number> {
  onInitFromDynamicConfig(config: EditPropertyConfig<number>) {
    super.onInitFromDynamicConfig(config);
    const newValidators = [CustomNumberValidators.isNumber];
    if (this.formControl.validator) {
      newValidators.push(this.formControl.validator);
    }
    this.formControl.setValidators(newValidators);
    this.formControl.updateValueAndValidity();
  }
}
