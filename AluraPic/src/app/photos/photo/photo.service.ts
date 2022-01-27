import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const api = "http://localhost:3001"

@Injectable({providedIn: `root`}) //dando acesso aos outros componentes

export class PhotoService {

    constructor(private http: HttpClient) {

    }

    listFromUser() {
        return this.http.get<Photo[]>(api + '/');
    }
}