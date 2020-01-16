import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../_collaborators/data.service';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() notesData;
  id: number;
  active: Boolean;
  lastActiveID: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.lastActiveID = this.id;
    this.active = false;
    this.dataService.notifyNoteId.subscribe(noteId => {
      if (this.lastActiveID != noteId) {
        this.active = false;
        this.lastActiveID = noteId;
      }
      this.id = noteId;
    });
  }

  setActive() {
    this.active = true;
  }
  get content() {
    return this.dataService.getSingleNote(this.notesData['id']).content;
  }

  get title() {
    return this.dataService.getSingleNote(this.notesData['id']).title;
  }

  get date() {
    return this.dataService.getSingleNote(this.notesData['id']).date;
  }
}
