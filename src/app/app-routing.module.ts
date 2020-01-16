import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillComponent } from './fill/fill.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: FillComponent
  },
  {
    path: 'note/:id',
    component: EditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
