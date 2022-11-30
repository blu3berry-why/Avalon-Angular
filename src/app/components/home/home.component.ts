import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators'
import { LobbyService } from 'src/app/services/lobby.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private lobbyService: LobbyService, private router: Router) {}

  lobbyCode = ''



  createLobby() {
    this.lobbyService.createLobby().subscribe(res => {
      console.log(res)
      this.lobbyCode = res.code
      this.lobbyService.join(this.lobbyCode).subscribe(res => {
        console.log(res)
        this.router.navigate(['startinglobby/', this.lobbyCode])
      })
    })
  }

  join() {
    this.lobbyService.join(this.lobbyCode).subscribe(
      res =>{
        this.router.navigate(['startinglobby/', this.lobbyCode])
      }
    )
  }


}
