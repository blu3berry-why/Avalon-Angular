import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from 'src/app/model/Info';
import { AuthService } from 'src/app/services/auth.service';
import { GameService } from 'src/app/services/game.service';



@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.css']
})
export class GameMainComponent implements OnInit{

  lobbyCode:string

   gameInfo : Info | undefined

  constructor(private activatedRoute :ActivatedRoute, private router:Router, private gameService: GameService, private authService: AuthService){
    this.lobbyCode = activatedRoute.snapshot.params.lobbyCode
  }


  ngOnInit(): void {
    this.gameService.gameInfo(this.lobbyCode).subscribe(res => {
      console.log(res);
      this.gameInfo = res
    })
  }

  canVote(): boolean{
    return (this.gameInfo?.selectedForAdventure?.length ?? 0) > 0
  }

  canSelect():boolean{
    return  this.authService?.user?.username == this.gameInfo?.king
  }

  canGoOnAdventure():boolean{
    return (this.gameInfo?.isAdventure ?? false) && (this.gameInfo?.selectedForAdventure.some(obj => {
      return this.authService.user?.username == obj
    }) ?? false)
  }

  character(){
    this.router.navigate(['gamemmain/' + this.lobbyCode + '/character'])
  }

}
