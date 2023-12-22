import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Repos, User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUsers(key: string): Observable<User[]> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${key}`

    });

    return this.http.get<User[]>('https://api.github.com/users', {headers})
  }
  getRepos(key: string, url:string): Observable<Repos[]> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${key}`

    });

    return this.http.get<Repos[]>(url, {headers})
  }
}
