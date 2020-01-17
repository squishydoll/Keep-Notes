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
  clickedIndex;
  notes: any[];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.notes = [];
    this.notes = this.dataService.notes;
    this.dataService.notifyNoteUpdation.subscribe(notes => {
      this.notes = notes;
    });
    this.searchForm = new FormGroup({
      searchvalue: new FormControl('')
    });

    this.dataService.notifyNoteSelection.subscribe(value => {
      this.clickedIndex = value;
    });
  }

  get searchvalue() {
    return this.searchForm.controls['searchvalue'];
  }
}
