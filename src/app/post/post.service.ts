import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({providedIn: "root"})
export class PostService {
    private posts: any[]

    constructor(private http: HttpClient) {
        this.http = http;
    }

    getPosts() {
        this.http.get<{
            messages: {
            created_at: number,
            name: string,
            text: string,
            source_guid: string
            }[]
        }>(`http://localhost:3000/api/posts`).pipe(map((messageData) => {
            return messageData.messages.map(message => {
                const songLinks = this.getSongLink(message.text);
                return {
                    created_at: new Date(message.created_at* 1000),
                    name: message.name,
                    text: message.text,
                    song_link: songLinks ? songLinks[0]: "",
                    source_guid: message.source_guid.indexOf('android') > -1 ? 'lol at this loser using android' : ''
                }
            })
        })).subscribe(transformedMessages => {
            console.log(transformedMessages);
        })
    }

    getSongLink(text: string) {
        return text.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)
    }
}