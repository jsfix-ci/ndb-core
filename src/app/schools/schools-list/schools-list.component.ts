import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {School} from '../school';
import {Router} from '@angular/router';
import {EntityMapperService} from '../../entity/entity-mapper.service';

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit, AfterViewInit {
  schoolList: School[];
  schoolDataSource: MatTableDataSource<School> = new MatTableDataSource<School>();

  @ViewChild(MatSort) sort: MatSort;
  columnsToDisplay: string[] = ['name', 'address', 'medium', 'privateSchool'];
  mediums: string[];
  mediumFilterSelection = '';
  filterString = '';

  privateSchools: string[] = ['Private  School'];
  privateSchoolFilterSelection = '';

  filterFunctionPrivateSchool: (s: School) => boolean = (s: School) => true;
  filterFunctionMedium: (s: School) => boolean = (s: School) => true;

  constructor(private router: Router,
              private entityMapperService: EntityMapperService) {

  }

  ngOnInit() {
    this.entityMapperService.loadType<School>(School)
      .then(data => {
        this.schoolList = data;
        this.schoolDataSource.data = data;
        this.setMediumFilteredList(this.mediumFilterSelection);
        this.mediums = data.map(s => s.medium).filter((value, index, arr) => arr.indexOf(value) === index);
      });
    this.schoolDataSource.sort = this.sort;
  }

 // schoolDetail version
  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.schoolDataSource.filter = filterValue;
  }

  applyFilterGroups() {
    this.schoolDataSource.data = this.schoolList
      .filter(this.filterFunctionMedium)
      .filter(this.filterFunctionPrivateSchool);
  }

  setMediumFilteredList(filteredSelection: string) {
    if (filteredSelection === '') {
      this.filterFunctionMedium = (s: School) => true;
    } else {
      this.filterFunctionMedium = (s: School) => s.medium === filteredSelection;
    }

    this.applyFilterGroups();
  }

  setPrivateSchoolFilteredList(filteredSelection: string) {
    if (filteredSelection === '') {
      this.filterFunctionPrivateSchool = (s: School) => true;
    } else {
      this.filterFunctionPrivateSchool = (s: School) => s.privateSchool == true;
    }

    this.applyFilterGroups();
  }

  addSchoolClick() {
    let route: string;
    route = this.router.url + '/new';
    this.router.navigate([route]);
  }

  showSchoolDetails(school: School) {
    this.router.navigate(['/school', school.getId()]);
  }
}
