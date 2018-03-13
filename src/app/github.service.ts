import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class GithubService {
  private userName: string;

  constructor(private _http: Http) {}

  private fetch(url: string) {
    return this._http
      .get(url)
      .map(
        result => (result.status !== 404 ? result.json() : Observable.empty())
      )
      .catch(err => Observable.throw("Such User wasn't found..."));
  }

  getUser() {
    return this.fetch("http://api.github.com/users/" + this.userName);
  }

  setUser(user: string) {
    this.userName = user;
  }

  getUserRepos() {
    return this.fetch(
      "http://api.github.com/users/" + this.userName + "/repos"
    );
  }
}
