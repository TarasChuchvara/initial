import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  URL:string= `https://jsonplaceholder.typicode.com/posts`;
  constructor(private httpClient:HttpClient) { }
  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.URL}`)
  }

}
