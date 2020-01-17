import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { DataService } from '../_collaborators/data.service';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, OnChanges {
  @Input() notesData;
  id: number;
  active: Boolean;

  @Input() myIndex;
  @Input() clickedIndex;

  @Output() noteEmitter = new EventEmitter();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.notifyNoteId.subscribe(noteId => {
      this.id = noteId;
    });
  }

  setActive() {
    this.active = true;
    this.dataService.notifyNoteSelection.next(this.myIndex);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clickedIndex = changes['clickedIndex'].currentValue;
    if (this.myIndex == this.clickedIndex) {
      this.active = true;
    } else {
      this.active = false;
    }
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
