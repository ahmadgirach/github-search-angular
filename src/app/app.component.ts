import { Component, OnInit } from "@angular/core";
import { GithubService } from "./github.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  userName: string;
  user: any;
  repos: any;
  userNotFound: boolean = false;

  constructor(private _service: GithubService) {
    this.userName = "";
  }

  ngOnInit() {
    const input = <HTMLElement>document.getElementsByClassName("input")[0];
    input.focus();
    // const errors = document.getElementById("errors");
    // if (!this.userName) errors.style.display = "none";
  }

  searchUser(e) {
    if (e.which == 13) {
      if (!this.userName) {
        e.preventDefault();
      } else {
        this._service.setUser(this.userName);
        const user = this._service.getUser();
        if (user.isEmpty) {
          user.subscribe(user => {
            this.user = user;
            this._service
              .getUserRepos()
              .subscribe(repos => (this.repos = repos));
          });
        } else {
          this.userNotFound = true;
        }
      }
    }
  }
}
