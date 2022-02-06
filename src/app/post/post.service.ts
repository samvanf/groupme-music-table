import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({providedIn: "root"})
export class PostService {
    private posts: any[]

    constructor(private http: HttpClient) {
        this.http = http;
    }

    getPosts() {
        console.log('hello world');
        this.http.get(`http://localhost:3000/api/posts`);
    }
}