import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { LobbyCode } from '../model/LobbyCode'
import { Message } from '../model/Message'
import { Settings } from '../model/Settings'

@Injectable({
  providedIn: 'root',
})
export class LobbyService {
  constructor(private http: HttpClient) {}

  getSettings(lobbyCode: string){
    return this.http.get<Settings>(environment.url + 'lobby/' + lobbyCode + '/settings')
  }

  getPlayerNames(lobbyCode: string){
    return this.http.get<string[]>(environment.url + 'lobby/' + lobbyCode + '/playernames')
  }

  createLobby() {
    return this.http.post<LobbyCode>(environment.url + 'lobby/create', {})
  }

  join(lobbyCode: string) {
    return this.http.post<Message>(
      environment.url + 'lobby/' + lobbyCode + '/join',
       {observe: 'response'}
    )
  }

  leave(lobbyCode: string) {
    return this.http.post<Message>(
      environment.url + 'lobby/' + lobbyCode + '/leave',{})
  }

  start(lobbyCode: string) {
    return this.http.post<Message>(
      environment.url + 'lobby/' + lobbyCode + '/start',
       {observe: 'response'}
    )
  }

  setSettings(lobbyCode:string, settings:Settings){
    return this.http.put<Message>(environment.url + 'lobby/' + lobbyCode + '/settings', settings)
  }



}
