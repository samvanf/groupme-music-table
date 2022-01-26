import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: "root"})
export class PostService {
    private posts: any[]

    constructor(private http: HttpClient) {}

    getPosts() {
        console.log('hello world')
    }
}