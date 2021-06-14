import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WarningLevel } from "../../warning-level";
import { OnInitDynamicComponent } from "../../../core/view/dynamic-components/on-init-dynamic-component.interface";
import { concatMap, filter, map } from "rxjs/operators";
import { ChildrenService } from "../children.service";
import { Child } from "../model/child";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Observable } from "rxjs";

interface BmiRow {
  childId: string;
  bmi: number;
}

@Component({
  selector: "app-children-bmi-dashboard",
  templateUrl: "./children-bmi-dashboard.component.html",
  styleUrls: ["./children-bmi-dashboard.component.scss"],
})
@UntilDestroy()
export class ChildrenBmiDashboardComponent
  implements OnInit, OnInitDynamicComponent
{
  bmiRows: BmiRow[] = [];

  constructor(
    private childrenService: ChildrenService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.childrenService
      .getChildren()
      .pipe(
        untilDestroyed(this),
        concatMap((child) => this.rowForChildId(child.getId()))
      )
      .subscribe((row) => {
        this.bmiRows = [row].concat(this.bmiRows);
      });
  }

  rowForChildId(childId: string): Observable<BmiRow> {
    return this.childrenService.getHealthChecksOfChild(childId).pipe(
      map((healthChecks) => {
        if (healthChecks.length > 0) {
          const latestCheck = healthChecks.reduce((prev, cur) =>
            cur.date > prev.date ? cur : prev
          );
          if (latestCheck.getWarningLevel() === WarningLevel.URGENT) {
            return { childId: childId, bmi: latestCheck.bmi };
          } else {
            return null;
          }
        } else {
          return null;
        }
      }),
      filter((next) => next !== null)
    );
  }

  onInitFromDynamicConfig(config: any) {}

  recordTrackByFunction = (index, item) => item.childId;

  goToChild(childId: string) {
    const path = "/" + Child.ENTITY_TYPE.toLowerCase();
    this.router.navigate([path, childId]);
  }
}
