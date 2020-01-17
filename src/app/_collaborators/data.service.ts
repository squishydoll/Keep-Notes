import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentNote;
  notes: any[];
  notifyNoteUpdation: Subject<any>;
  notifyNoteId: Subject<number>;
  notifyNoteSelection: Subject<any>;

  constructor() {
    this.notifyNoteSelection = new Subject();
    this.notifyNoteUpdation = new Subject();
    this.notifyNoteId = new Subject();
    this.currentNote = {};
    this.notes = JSON.parse(localStorage.getItem('notes'));
  }

  getNotesData() {
    return this.notes;
  }

  addNewNote(note) {
    this.notes = JSON.parse(localStorage.getItem('notes'));
    if (!this.notes) {
      this.notes = [];
    }
    note['date'] = new Date();
    this.notes.push(note);
    this.notifyNoteUpdation.next(this.notes);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  deleteExistingNote(noteId) {
    this.notes = JSON.parse(localStorage.getItem('notes'));
    let noteIndex = this.notes.findIndex(el => el.id == noteId);
    this.notes.splice(noteIndex, 1);
    this.notifyNoteUpdation.next(this.notes);

    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  setSingleNote(noteId, value) {
    this.notes = JSON.parse(localStorage.getItem('notes'));
    this.currentNote = {};
    let currentDate = new Date();
    let noteIndex = this.notes.findIndex(el => el.id == noteId);
    this.notes[noteIndex] = { ...value, date: currentDate, id: noteId };
    this.notifyNoteUpdation.next(this.notes);

    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  getSingleNote(noteId) {
    this.notes = JSON.parse(localStorage.getItem('notes'));
    if (!noteId) {
      return {};
    }
    this.currentNote = this.notes.find(el => el.id == noteId);
    return this.currentNote;
  }
}
