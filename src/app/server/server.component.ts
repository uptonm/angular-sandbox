import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: boolean = Math.random() * 10 > 5;

  getServerStatus = () => {
    return this.serverStatus ? "online" : "offline";
  };

  setServerStatus = () => {
    this.serverStatus = !this.serverStatus;
  };
}
