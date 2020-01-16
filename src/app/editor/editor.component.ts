import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../_collaborators/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editorForm: FormGroup;
  constructor(private route: ActivatedRoute, private dataService: DataService) {}
  note;
  noteId;
  ngOnInit() {
    this.editorForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    });

    this.route.paramMap.subscribe(param => {
      this.noteId = param.get('id');
      this.note = this.dataService.getSingleNote(this.noteId);
      this.editorForm.setValue({
        title: this.note.title,
        content: this.note.content
      });
      this.dataService.notifyNoteId.next(this.noteId);
    });

    this.valueChangeMonitoring();
  }

  valueChangeMonitoring() {
    this.editorForm.valueChanges.subscribe(value => {
      this.dataService.setSingleNote(this.noteId, value);
    });
  }

  get content() {
    return this.editorForm.controls['content'];
  }

  get title() {
    return this.editorForm.controls['title'];
  }
}
