import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AssassinGuess } from '../model/AssassinGuess';
import { CharacterInfo } from '../model/CharacterInfo';
import { Info } from '../model/Info';
import { Message } from '../model/Message';
import { Vote } from '../model/Vote';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  vote( lobbyCode: String, vote: Vote){
    return this.http.post<Message>(environment.url + lobbyCode + '/vote', vote)
  }

  select(lobbyCode: String,chosen : String[] ){
    return this.http.post<Message>(environment.url + lobbyCode + '/select', chosen)
  }

  assassin(lobbyCode:String, guess:AssassinGuess){
    return this.http.post<Message>(environment.url + lobbyCode + '/assassin', guess)
  }

  adventure(lobbyCode: String, vote:Vote){
    return this.http.post<Message>(environment.url + lobbyCode + '/adventureVote', vote)
  }

  gameInfo(lobbyCode:String){
    return this.http.get<Info>(environment.url + lobbyCode)
  }

  character(lobbyCode: String){
    return this.http.get<CharacterInfo>(environment.url + lobbyCode+ '/character')
  }


}
