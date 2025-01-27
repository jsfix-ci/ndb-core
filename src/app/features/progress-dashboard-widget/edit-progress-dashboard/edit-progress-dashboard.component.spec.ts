import { ComponentFixture, TestBed } from "@angular/core/testing";

import {
  EditProgressDashboardComponent,
  EditProgressDashboardComponentData,
} from "./edit-progress-dashboard.component";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { TypedForm } from "../../../core/entity-components/entity-form/entity-form.service";
import { ProgressDashboardPart } from "../progress-dashboard/progress-dashboard-config";

describe("EditProgressDashboardComponent", () => {
  let component: EditProgressDashboardComponent;
  let fixture: ComponentFixture<EditProgressDashboardComponent>;

  const mockDialogData: EditProgressDashboardComponentData = {
    parts: [
      {
        label: "foo",
        currentValue: 4,
        targetValue: 10,
      },
      {
        label: "bar",
        currentValue: 0,
        targetValue: 0,
      },
      {
        label: "baz",
        currentValue: 10,
        targetValue: 10,
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProgressDashboardComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: mockDialogData,
        },
        FormBuilder,
      ],
    }).compileComponents();
  });

  function getGroup(index: number): TypedForm<ProgressDashboardPart> {
    return component.forms.at(index);
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgressDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain the initial state from the data", () => {
    expect(component.forms).toHaveValue(mockDialogData.parts);
    expect(component.forms).toBeValidForm();
  });

  it("should append a new part", () => {
    component.addPart();
    expect(component.forms).toHaveSize(4);
  });

  it("should delete a part", () => {
    component.removePart(1);
    expect(component.forms).toHaveSize(2);
    expect(component.forms).toHaveValue([
      mockDialogData.parts[0],
      mockDialogData.parts[2],
    ]);
  });

  it("should mark the form as invalid when current or target is not present", () => {
    const firstForm = getGroup(0);
    firstForm.get("currentValue").setValue(undefined);
    expect(firstForm.get("currentValue")).toContainFormError("required");
    firstForm.get("targetValue").setValue(undefined);
    expect(firstForm.get("targetValue")).toContainFormError("required");

    expect(firstForm).not.toBeValidForm();
  });

  it("should mark the form as invalid when the current or target value is negative", () => {
    const group = getGroup(1);
    group.get("currentValue").setValue(-1);
    expect(group.get("currentValue")).toContainFormError("min");
    group.get("targetValue").setValue(-3);
    expect(group.get("targetValue")).toContainFormError("min");

    expect(group).not.toBeValidForm();
  });

  it("should mark the form as invalid when the current value is greater than the target value", () => {
    const group = getGroup(2);
    group.get("currentValue").setValue(3);
    group.get("targetValue").setValue(2);
    expect(group).not.toBeValidForm();
    expect(group).toContainFormError("currentGtTarget");
  });

  it("should clear only one error when only one is resolved", () => {
    const group = getGroup(1);
    group.get("currentValue").setValue(-2);
    group.get("targetValue").setValue(-5);
    expect(group).not.toBeValidForm();
    expect(group).toContainFormError("currentGtTarget");
    expect(group.get("currentValue")).toContainFormError("min");
    expect(group.get("targetValue")).toContainFormError("min");
    group.get("targetValue").setValue(5);
    expect(group).not.toBeValidForm();
    expect(group).not.toContainFormError("currentGtTarget");
    expect(group.get("currentValue")).toContainFormError("min");
    expect(group.get("targetValue")).not.toContainFormError("min");
  });

  it("correctly sets errors when the target is 0", () => {
    const group = getGroup(0);
    group.get("currentValue").setValue(1);
    group.get("targetValue").setValue(0);
    expect(group).not.toBeValidForm();
  });
});
