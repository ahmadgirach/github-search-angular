import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class GithubService {
  private userName: string;

  constructor(private _http: Http) {}

  fetch(url: string) {
    return this._http
      .get(url)
      .map(result => result.json())
      .catch(e => {
        return Observable.throw(new Error("Such User wasn't found..."));
      });
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
