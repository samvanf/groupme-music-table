import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";

export interface SongEntry {
    created_at: Date;
    name: string;
    text: string;
    song_link: string;
    source_guid: string;
  }
  
  const SONG_DATA: SongEntry[] = [
    {
      created_at: new Date(1643376377000),
      name: 'Alex Tottser',
      text: 'Great song for a cozy morning or night \n https://open.spotify.com/track/0EjtZmOLT6WLShJRHCFWVU?si=S8QpzxazSgC53mGtRcKiKA&utm_source=copy-link',
      song_link: '',
      source_guid: ''},
    {
      created_at: new Date(1642598643000),
      name: 'Zach Dobos',
      text: ' start https://open.spotify.com/track/0EjtZmOLT6WLShJRHCFWVU?si=S8QpzxazSgC53mGtRcKiKA&utm_source=copy-link end',
      song_link: '',
      source_guid: '2'
    }
  ];

  

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    displayedColumns: string[] = ['name', "song link", 'text', 'created at', 'misc'];
    dataSource = SONG_DATA;

    constructor(public postService: PostService) {
      this.postService = postService;
    }

    ngOnInit(): void {
        this.postService.getPosts();
    }
    
}