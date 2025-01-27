import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OnInitDynamicComponent } from "../../../../core/view/dynamic-components/on-init-dynamic-component.interface";
import { ConfigurableEnumValue } from "../../../../core/configurable-enum/configurable-enum.interface";
import { Child } from "../../model/child";
import { DynamicComponent } from "../../../../core/view/dynamic-components/dynamic-component.decorator";
import { EntityMapperService } from "../../../../core/entity/entity-mapper.service";

@DynamicComponent("ChildrenCountDashboard")
@Component({
  selector: "app-children-count-dashboard",
  templateUrl: "./children-count-dashboard.component.html",
  styleUrls: ["./children-count-dashboard.component.scss"],
})
export class ChildrenCountDashboardComponent
  implements OnInitDynamicComponent, OnInit {
  /**
   * The property of the Child entities to group counts by.
   *
   * Default is "center".
   */
  @Input() groupBy: string = "center";

  totalChildren: number;
  childrenGroupCounts: { label: string; value: number; id: string }[] = [];
  loading = true;

  constructor(
    private entityMapper: EntityMapperService,
    private router: Router
  ) {}

  onInitFromDynamicConfig(config: any) {
    if (config?.groupBy) {
      this.groupBy = config.groupBy;
    }
  }

  async ngOnInit() {
    const children = await this.entityMapper.loadType(Child);
    this.updateCounts(children);
  }

  goToChildrenList(filterId: string) {
    const params = {};
    params[this.groupBy] = filterId;

    const path = "/" + Child.ENTITY_TYPE.toLowerCase();
    this.router.navigate([path], { queryParams: params });
  }

  private updateCounts(children: Child[]) {
    this.totalChildren = 0;

    const countMap = new Map<any, number>();
    children.forEach((child) => {
      if (child.isActive) {
        let count = countMap.get(child[this.groupBy]);
        if (count === undefined) {
          count = 0;
        }

        count++;
        this.totalChildren++;
        countMap.set(child[this.groupBy], count);
      }
    });

    this.childrenGroupCounts = Array.from(countMap.entries()) // direct use of Map creates change detection problems
      .map((entry) => {
        const label = extractHumanReadableLabel(entry[0]);
        return {
          label: label,
          value: entry[1],
          id: entry[0]?.id || label,
        };
      });
    this.loading = false;
  }
}

/**
 * Get a human-readable string from the given value as a label.
 * @param value
 */
function extractHumanReadableLabel(
  value: string | ConfigurableEnumValue | any
): string {
  if (value === undefined) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  if (value?.label) {
    return value.label;
  }

  return String(value);
}
