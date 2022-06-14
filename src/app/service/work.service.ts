import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iworks } from "../models/works";

@Injectable({
    providedIn: 'root'
})
export class WorkService {
    API_URL = "http://localhost:3002/works";

    constructor(private http: HttpClient) { }

    getWork(id: string): Observable<Iworks> {
        return this.http.get<Iworks>(`${this.API_URL}/${id}`)
    }
    getWorks(): Observable<Iworks[]> {
        return this.http.get<Iworks[]>(this.API_URL)
    }
    removeWork(id: number): Observable<Iworks> {
        return this.http.delete<Iworks>(`${this.API_URL}/${id}`)
    }
    addWork(post: any): Observable<Iworks> {
        return this.http.post<Iworks>(`${this.API_URL}`, post)
    }
    updateWork(post: Iworks) {
        return this.http.put<Iworks>(`${this.API_URL}/${post.id}`, post)
    }
    getAllWork(): Observable<Iworks> {
        return this.http.get<Iworks>(this.API_URL);
    }
}