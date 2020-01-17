import { Component } from '@angular/core';
import { DataService } from './_collaborators/data.service';
import { Router } from '@angular/router';
import { faTrashAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutomateNotepad';
  dataLength: number;
  noteid: number;
  faTrash = faTrashAlt;
  faClipboard = faFileAlt;
  notesOpen: boolean;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/'], { replaceUrl: true });
    //create localStorage;
    this.dataLength = 0;
    this.dataService.notifyNoteId.subscribe(id => (this.noteid = id));

    this.dataService.notifyNoteSelection.subscribe(() => {
      if (window.innerWidth < 767) this.notesOpen = false;
    });
  }

  editComponent(event: string) {
    if (event == 'add') {
      this.dataLength++;
      let dataObj = {
        title: `Untitled`,
        content: '',
        id: this.dataLength
      };
      this.dataService.addNewNote(dataObj);
    } else if (event == 'delete') {
      if (this.noteid) {
        this.dataService.deleteExistingNote(this.noteid);
        this.router.navigate(['/'], { replaceUrl: true });
      } else {
        alert('OOPS !! Select a note to delete.');
      }
    }
  }
}
