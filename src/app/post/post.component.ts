import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";

export interface SongEntry {
    name: string;
    text: string;
  }
  
  const SONG_DATA: SongEntry[] = [
    {name: 'Alex Tottser', text: 'Great song for a cozy morning or night \n https://open.spotify.com/track/0EjtZmOLT6WLShJRHCFWVU?si=S8QpzxazSgC53mGtRcKiKA&utm_source=copy-link'}
  ];

  

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {

    displayedColumns: string[] = ['sender name', 'song title'];
    dataSource = SONG_DATA;
    
}