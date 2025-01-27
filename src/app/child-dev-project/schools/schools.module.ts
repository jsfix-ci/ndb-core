import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { SchoolBlockComponent } from "./school-block/school-block.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Angulartics2Module } from "angulartics2";
import { ChildrenOverviewComponent } from "./children-overview/children-overview.component";
import { EntityListModule } from "../../core/entity-components/entity-list/entity-list.module";
import { EntitySubrecordModule } from "../../core/entity-components/entity-subrecord/entity-subrecord.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ViewModule } from "../../core/view/view.module";
import { ActivitiesOverviewComponent } from "./activities-overview/activities-overview.component";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatExpansionModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatSortModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTooltipModule,
    Angulartics2Module,
    EntityListModule,
    EntitySubrecordModule,
    FontAwesomeModule,
    ViewModule,
  ],
  declarations: [
    SchoolBlockComponent,
    ChildrenOverviewComponent,
    ActivitiesOverviewComponent,
  ],
  exports: [SchoolBlockComponent],
  providers: [DatePipe],
})
export class SchoolsModule {
  static dynamicComponents = [
    ChildrenOverviewComponent,
    SchoolBlockComponent,
    ActivitiesOverviewComponent,
  ];
}
