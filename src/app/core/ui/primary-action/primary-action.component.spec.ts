import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PrimaryActionComponent } from "./primary-action.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { FormDialogModule } from "../../form-dialog/form-dialog.module";
import { MockSessionModule } from "../../session/mock-session.module";
import { EntitySchemaService } from "../../entity/schema/entity-schema.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("PrimaryActionComponent", () => {
  let component: PrimaryActionComponent;
  let fixture: ComponentFixture<PrimaryActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryActionComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
        FormDialogModule,
        HttpClientTestingModule,
        MockSessionModule.withState(),
      ],
      providers: [EntitySchemaService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
