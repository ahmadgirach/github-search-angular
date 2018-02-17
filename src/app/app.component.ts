import { Component } from "@angular/core";
import { GithubService } from "./github.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userName: string;
  user: any[];

  constructor(private _service: GithubService) {}

  fetchData() {
    this._service.getUser().subscribe(user => {
      this.user = user;
    });
  }

  searchUser(e) {
    if (e.which == 13) {
      this._service.setUser(this.userName);
      this.fetchData();
    }
  }
}
