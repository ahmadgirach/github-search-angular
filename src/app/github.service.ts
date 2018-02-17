import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class GithubService {
  private userName: string;

  constructor(private _http: Http) {}

  fetch(url: string) {
    return this._http.get(url).map(result => result.json());
  }

  getUser() {
    return this.fetch("http://api.github.com/users/" + this.userName);
  }

  setUser(user: string) {
    this.userName = user;
  }
}
