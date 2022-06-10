import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iposts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = "http://localhost:3002/posts";

  constructor(private http: HttpClient) { }
  getPost(id: number): Observable<Iposts> {
    return this.http.get<Iposts>(`${this.API_URL}/${id}`)
  }
  getPosts(): Observable<Iposts[]> {
    return this.http.get<Iposts[]>(this.API_URL)
  }
  removePost(id: number): Observable<Iposts> {
    return this.http.delete<Iposts>(`${this.API_URL}/${id}`)
  }
  addPost(post: any): Observable<Iposts> {
    return this.http.post<Iposts>(`${this.API_URL}`, post)
  }
  updatePost(post: Iposts) {
    return this.http.put<Iposts>(`${this.API_URL}/${post.id}`, post)
  }


  getAll() {
    return this.http.get(this.API_URL);
  }
}
