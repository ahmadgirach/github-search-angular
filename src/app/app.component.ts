import { Component, OnInit } from "@angular/core";
import { GithubService } from "./github.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userName: string;
  user: any[];
  enterHasBeenPressed;

  constructor(private _service: GithubService) {}

  ngOnInit() {
    const input: HTMLElement = document.getElementsByClassName(
      "input"
    )[0] as HTMLElement;
    input.focus();
    this.hide("not_found");
  }

  fetchData() {
    this._service.getUser().subscribe(user => {
      this.user = user;
    });
  }

  searchUser(e) {
    if (e.key === "Enter") {
      this._service.setUser(this.userName);
      this.fetchData();
      this.enterHasBeenPressed = true;
    }
    if (this.enterHasBeenPressed) {
      console.info("enterHasBeenPressed =>", this.enterHasBeenPressed);
      // @ToDo: Stuff for hide/show...
    }
  }

  hide(element: string) {
    document.getElementById(element).style.display = "none";
  }
}
