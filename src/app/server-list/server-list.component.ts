import { Component, OnInit } from "@angular/core";

@Component({
  selector: "server-list",
  templateUrl: "./server-list.component.html",
  styleUrls: ["./server-list.component.css"]
})
export class ServerListComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onUpdateServerName(event: any) {
    console.log(event.target.value);
  }
}
