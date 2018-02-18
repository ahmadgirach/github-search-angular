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
    this._service.setUser(this.userName);
    this._service.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
