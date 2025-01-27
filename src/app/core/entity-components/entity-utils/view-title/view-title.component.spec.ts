import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewTitleComponent } from "./view-title.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("ViewTitleComponent", () => {
  let component: ViewTitleComponent;
  let fixture: ComponentFixture<ViewTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTitleComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
