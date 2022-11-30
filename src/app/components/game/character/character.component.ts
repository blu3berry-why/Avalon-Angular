import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterInfo } from 'src/app/model/CharacterInfo';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{

  lobbyCode:string
  character:CharacterInfo | undefined

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private gameService:GameService){
    this.lobbyCode = activatedRoute.snapshot.params.lobbyCode
  }
  ngOnInit(): void {
    this.gameService.character(this.lobbyCode).subscribe(res => {
      this.character = res
    })
  }

  back(){
    this.router.navigate(['gamemmain/' + this.lobbyCode ])
  }

}
