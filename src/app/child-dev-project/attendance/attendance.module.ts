/*
 *     This file is part of ndb-core.
 *
 *     ndb-core is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     ndb-core is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with ndb-core.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Injectable, NgModule } from "@angular/core";
import { EntityListModule } from "../../core/entity-components/entity-list/entity-list.module";
import { ChildrenModule } from "../children/children.module";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { ActivityCardComponent } from "./activity-card/activity-card.component";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RollCallSetupComponent } from "./add-day-attendance/roll-call-setup/roll-call-setup.component";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule } from "@angular/forms";
import { FlexModule } from "@angular/flex-layout";
import { AttendanceDayBlockComponent } from "./dashboard-widgets/attendance-week-dashboard/attendance-day-block/attendance-day-block.component";
import { AttendanceDetailsComponent } from "./attendance-details/attendance-details.component";
import { AddDayAttendanceComponent } from "./add-day-attendance/add-day-attendance.component";
import { RollCallComponent } from "./add-day-attendance/roll-call/roll-call.component";
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSelectModule } from "@angular/material/select";
import { SchoolsModule } from "../schools/schools.module";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormDialogModule } from "../../core/form-dialog/form-dialog.module";
import { AttendanceBlockComponent } from "./attendance-block/attendance-block.component";
import { RecentAttendanceBlocksComponent } from "../children/children-list/recent-attendance-blocks/recent-attendance-blocks.component";
import { EntitySubrecordModule } from "../../core/entity-components/entity-subrecord/entity-subrecord.module";
import { ActivityAttendanceSectionComponent } from "./activity-attendance-section/activity-attendance-section.component";
import { AttendanceCalendarComponent } from "./attendance-calendar/attendance-calendar.component";
import { GroupedChildAttendanceComponent } from "../children/child-details/grouped-child-attendance/grouped-child-attendance.component";
import { MatTabsModule } from "@angular/material/tabs";
import { AttendanceStatusSelectComponent } from "./attendance-status-select/attendance-status-select.component";
import { AttendanceWeekDashboardComponent } from "./dashboard-widgets/attendance-week-dashboard/attendance-week-dashboard.component";
import { RouterModule } from "@angular/router";
import { Angulartics2Module } from "angulartics2";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { AttendanceManagerComponent } from "./attendance-manager/attendance-manager.component";
import { EntityUtilsModule } from "../../core/entity-components/entity-utils/entity-utils.module";
import { DashboardModule } from "../../core/dashboard/dashboard.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ViewModule } from "../../core/view/view.module";
import { AttendanceSummaryComponent } from "./attendance-summary/attendance-summary.component";
import { RollCallTabComponent } from "./add-day-attendance/roll-call/roll-call-tab/roll-call-tab.component";
import {
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
  HammerModule,
} from "@angular/platform-browser";
import { ConfigurableEnumModule } from "../../core/configurable-enum/configurable-enum.module";
import * as Hammer from "hammerjs";
import { TabStateModule } from "../../utils/tab-state/tab-state.module";

@Injectable()
// Only allow horizontal swiping
export class HorizontalHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    ActivityCardComponent,
    RollCallSetupComponent,
    AttendanceDayBlockComponent,
    AttendanceDetailsComponent,
    AddDayAttendanceComponent,
    RollCallComponent,
    AttendanceBlockComponent,
    RecentAttendanceBlocksComponent,
    ActivityAttendanceSectionComponent,
    AttendanceCalendarComponent,
    GroupedChildAttendanceComponent,
    AttendanceStatusSelectComponent,
    AttendanceWeekDashboardComponent,
    AttendanceManagerComponent,
    AttendanceSummaryComponent,
    RollCallTabComponent,
  ],
  imports: [
    EntityListModule,
    ChildrenModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    FlexModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatSelectModule,
    SchoolsModule,
    MatSortModule,
    MatCheckboxModule,
    FormDialogModule,
    EntitySubrecordModule,
    MatTabsModule,
    RouterModule,
    Angulartics2Module,
    MatSlideToggleModule,
    EntityUtilsModule,
    FontAwesomeModule,
    DashboardModule,
    MatPaginatorModule,
    ViewModule,
    ConfigurableEnumModule,
    HammerModule,
    TabStateModule,
  ],
  exports: [
    ActivityCardComponent,
    RollCallSetupComponent,
    RollCallComponent,
    AttendanceStatusSelectComponent,
    AttendanceDayBlockComponent,
    ActivityAttendanceSectionComponent,
    AttendanceBlockComponent,
    AttendanceCalendarComponent,
    AttendanceDetailsComponent,
    AttendanceWeekDashboardComponent,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HorizontalHammerConfig,
    },
  ],
})
export class AttendanceModule {
  static dynamicComponents = [
    AddDayAttendanceComponent,
    AttendanceManagerComponent,
    ActivityAttendanceSectionComponent,
    AttendanceWeekDashboardComponent,
    GroupedChildAttendanceComponent,
    AttendanceBlockComponent,
    RecentAttendanceBlocksComponent,
  ];
}
