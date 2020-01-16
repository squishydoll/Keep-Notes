import { Component, OnInit } from '@angular/core';
import { DataService } from '../_collaborators/data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchForm: FormGroup;
  notes: any[];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.notes = [];
    this.dataService.notifyNoteUpdation.subscribe(notes => {
      this.notes = notes;
    });
    this.searchForm = new FormGroup({
      searchvalue: new FormControl('')
    });

    this.valueChangesMonitoring();
  }

  get searchvalue() {
    return this.searchForm.controls['searchvalue'];
  }

  valueChangesMonitoring() {
    this.searchvalue.valueChanges.subscribe(changedValue => {});
  }
}
