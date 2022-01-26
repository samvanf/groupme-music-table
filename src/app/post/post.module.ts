import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
