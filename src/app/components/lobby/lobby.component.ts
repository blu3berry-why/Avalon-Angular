import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit{
  constructor(private router:Router, private activatedRoute : ActivatedRoute, private lobbyService: LobbyService){
    this.lobbyCode = activatedRoute.snapshot.params.lobbyCode
  }
  ngOnInit(): void {
    this.getPlayers()
  }


  users: string[] = ["user1", "user2", "user3", "user4"]
  lobbyCode: string

  leave(){
    this.lobbyService.leave(this.lobbyCode).subscribe(res => {this.getPlayers()
    this.router.navigate(["home"])})
  }

  start(){
    this.lobbyService.start(this.lobbyCode)
  }

  getPlayers(){
    this.lobbyService.getPlayerNames(this.lobbyCode).subscribe(res => {
      console.log(res)
      this.users = res
    })
  }
}
