import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DisplayConfigurableEnumComponent } from "./display-configurable-enum.component";

describe("DisplayConfigurableEnumComponent", () => {
  let component: DisplayConfigurableEnumComponent;
  let fixture: ComponentFixture<DisplayConfigurableEnumComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DisplayConfigurableEnumComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayConfigurableEnumComponent);
    component = fixture.componentInstance;
    component.value = { id: "testCategory", label: "Test Category" };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("displays value's label", () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toBe("Test Category");
  });
});
