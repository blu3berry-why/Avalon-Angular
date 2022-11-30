import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from 'src/app/model/Info';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit{

  lobbyCode: string

  gameInfo: Info | undefined

  count = 0

  values = [
  {name: "", checked: false},
  {name: "", checked: false},
  {name: "", checked: false},
  {name: "", checked: false},
  {name: "", checked: false},
  {name: "", checked: false},
  {name: "", checked: false},
  {name: "", checked: false},
  {name: "", checked: false},
  {name: "", checked: false},
]
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private gameService:GameService){
    this.lobbyCode = activatedRoute.snapshot.params.lobbyCode
  }

  ngOnInit(): void {
    this.gameService.gameInfo(this.lobbyCode).subscribe(res => {
      this.gameInfo = res
      let i = 0;
      for(let player of this.gameInfo.playersName){
        this.values[i].name = player
        i++
      }
    })
  }

  back(){
    this.router.navigate(['gamemmain/', this.lobbyCode])
  }

  select(){
    if (this.count != this.gameInfo?.playerSelectNum){
      return
    }

    let selected = this.values.filter(obj => obj.checked).map(obj => obj.name)
    console.log(selected);
    this.gameService.select(this.lobbyCode, selected).subscribe(res => {
      this.router.navigate(['gamemmain/' + this.lobbyCode ])
    })

  }

  changed(event:any){

    if(event.currentTarget.checked){
      this.count++
    }else{
      this.count--
    }
  }





}
