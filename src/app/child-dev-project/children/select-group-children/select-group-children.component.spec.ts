import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from "@angular/core/testing";
import { SelectGroupChildrenComponent } from "./select-group-children.component";
import { ChildrenService } from "../children.service";
import { BehaviorSubject, of, Subject } from "rxjs";
import { Child } from "../model/child";
import { ChildrenModule } from "../children.module";
import { RouterTestingModule } from "@angular/router/testing";
import { mergeMap } from "rxjs/operators";

describe("SelectGroupChildrenComponent", () => {
  let component: SelectGroupChildrenComponent;
  let fixture: ComponentFixture<SelectGroupChildrenComponent>;

  let mockChildrenService;
  const mockChildrenObservable = new BehaviorSubject<Child[]>([]);

  beforeEach(
    waitForAsync(() => {
      mockChildrenService = jasmine.createSpyObj(["getChildren"]);
      mockChildrenService.getChildren.and.returnValue(
        mockChildrenObservable.pipe(mergeMap((x: Child[]) => x))
      );

      TestBed.configureTestingModule({
        declarations: [SelectGroupChildrenComponent],
        imports: [ChildrenModule, RouterTestingModule],
        providers: [
          { provide: ChildrenService, useValue: mockChildrenService },
        ],
      }).compileComponents();
    })
  );

  beforeEach(async () => {
    fixture = TestBed.createComponent(SelectGroupChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should extract all centers", fakeAsync(() => {
    const mockChildren = [new Child("0"), new Child("1")];
    mockChildren[0].center = { id: "a", label: "Center A" };
    mockChildren[1].center = { id: "b", label: "Center B" };

    mockChildrenService.getChildren.and.returnValue(of(mockChildren));
    component.ngOnInit();
    tick();

    expect(component.centerFilters.options.length).toBe(3);
  }));

  it("should extract all schools of selected center", fakeAsync(() => {
    const selectedCenter = { id: "a", label: "Center A" };
    const mockChildren = [
      new Child("0"),
      new Child("1"),
      new Child("2"),
      new Child("3"),
    ];
    mockChildren[0].center = selectedCenter;
    mockChildren[0].schoolId = "School:1";
    mockChildren[1].center = selectedCenter;
    mockChildren[1].schoolId = "School:2";
    mockChildren[3].center = { id: "c", label: "other center" };
    mockChildren[3].schoolId = "School:3";

    mockChildrenService.getChildren.and.returnValue(of(mockChildren));
    component.ngOnInit();
    tick();

    component.selectCenterFilter(
      component.centerFilters.options.find(
        (o) => o.label === selectedCenter.label
      )
    );

    expect(component.schoolFilters.options.length).toBe(3); // includes default option "all schools"
    expect(component.schoolFilters.options[1].key).toBe("School:1");
    expect(component.schoolFilters.options[2].key).toBe("School:2");
  }));

  it("should not list empty filter for undefined schools", fakeAsync(() => {
    const selectedCenter = { id: "a", label: "Center A" };
    const mockChildren = [new Child("0"), new Child("1")];
    mockChildren[0].center = selectedCenter;
    mockChildren[0].schoolId = "School:1";
    mockChildren[1].center = selectedCenter;
    // mockChildren[1].schoolId is not set

    mockChildrenService.getChildren.and.returnValue(of(mockChildren));
    component.ngOnInit();
    tick();

    component.selectCenterFilter(
      component.centerFilters.options.find(
        (o) => o.label === selectedCenter.label
      )
    );

    expect(component.schoolFilters.options.length).toBe(2); // includes default option "all schools"
    expect(component.schoolFilters.options[1].key).toBe("School:1");
  }));

  it("should emit selected children correctly filtered by center and school", fakeAsync(() => {
    const selectedCenter = { id: "a", label: "Center A" };
    const selectedSchool = "School:1";

    const mockChildren = [new Child("0"), new Child("1"), new Child("2")];
    mockChildren[0].center = selectedCenter;
    mockChildren[0].schoolId = selectedSchool;
    mockChildren[1].center = selectedCenter;
    // mockChildren[1].schoolId is not set
    mockChildren[2].center = { id: "c", label: "other center" };
    mockChildren[2].schoolId = selectedSchool;

    mockChildrenService.getChildren.and.returnValue(of(mockChildren));
    component.ngOnInit();
    tick();

    spyOn(component.valueChange, "emit");

    component.selectCenterFilter(
      component.centerFilters.options.find(
        (o) => o.label === selectedCenter.label
      )
    );
    component.selectSchoolFilter(
      component.schoolFilters.options.find((o) => o.key === selectedSchool)
    );
    component.confirmSelectedChildren();

    expect(component.valueChange.emit).toHaveBeenCalledWith([mockChildren[0]]);
  }));

  it("should emit all children of center for default filter", fakeAsync(() => {
    const selectedCenter = { id: "a", label: "Center A" };

    const mockChildren = [new Child("0"), new Child("1"), new Child("2")];
    mockChildren[0].center = selectedCenter;
    mockChildren[0].schoolId = "School:1";
    mockChildren[1].center = selectedCenter;
    // mockChildren[1].schoolId is not set
    mockChildren[2].center = { id: "c", label: "other center" };
    mockChildren[2].schoolId = "School:1";

    mockChildrenService.getChildren.and.returnValue(of(mockChildren));
    component.ngOnInit();
    tick();

    spyOn(component.valueChange, "emit");

    component.selectCenterFilter(
      component.centerFilters.options.find(
        (o) => o.label === selectedCenter.label
      )
    );
    component.selectSchoolFilter(
      component.schoolFilters.options.find((o) => o.key === "all")
    );
    component.confirmSelectedChildren();

    expect(component.valueChange.emit).toHaveBeenCalledWith([
      mockChildren[0],
      mockChildren[1],
    ]);
  }));
});
