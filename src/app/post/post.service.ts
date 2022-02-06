import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { map } from 'rxjs/operators';
// import * as rxjs from 'rxjs/operators';
import { map } from "rxjs/operators";

@Injectable({providedIn: "root"})
export class PostService {
    private posts: any[]

    constructor(private http: HttpClient) {
        this.http = http;
    }

    getPosts() {
        console.log('hello world');
        this.http.get<{
            messages: {
                attachments: any[],
                avatar_url: string,
                created_at: number,
                favorited_by: any[],
                group_id: string,
                id: string,
                name: string,
                sender_id: string,
                sender_type: string,
                source_guid: string,
                system: boolean,
                text: string,
                user_id: string,
                platform: string
            }[]
        }>(`http://localhost:3000/api/posts`).pipe(map((messageData) => {
            console.log(messageData.messages[0].name)
        })).subscribe(transformedMessages => {
            console.log(transformedMessages)
        })
    }
}