import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { RegisterPageComponent } from './components/register-page/register-page.component'
import { JWTInterceptor } from './interceptors/app.jwt-interceptor'
import { HomeComponent } from './components/home/home.component'
import { Redirect403Interceptor } from './interceptors/redirect403-interceptor'
import { LobbyComponent } from './components/lobby/lobby.component'
import { LobbySettingsComponent } from './components/lobby-settings/lobby-settings.component'
import { UsernameInterceptor } from './interceptors/username-interceptor'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomeComponent,
    LobbyComponent,
    LobbySettingsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Redirect403Interceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: UsernameInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
