import { Component, OnInit } from "@angular/core";
import { GithubService } from "./github.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  userName: string;
  user: any[];
  repos: any[];

  constructor(private _service: GithubService) {
    this.userName = "";
  }

  ngOnInit() {
    const input: HTMLElement = document.getElementsByClassName(
      "input"
    )[0] as HTMLElement;
    input.focus();
  }

  searchUser(e) {
    if (e.which == 13) {
      this._service.setUser(this.userName);
      this._service.getUser().subscribe(user => (this.user = user));
      this._service.getUserRepos().subscribe(repos => (this.repos = repos));
    }
  }
}
