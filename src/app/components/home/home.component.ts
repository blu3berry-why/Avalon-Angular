import { Component } from '@angular/core';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private lobbyService:LobbyService){}

  lobbycode  = ""

  join(){
    console.log(this.lobbycode)
  }

  createLobby(){
    this.lobbyService.createLobby()

  }
}
