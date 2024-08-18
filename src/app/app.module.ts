import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InputComponent } from './components/input/input.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ButtonComponent } from './components/button/button.component'
import { LoginComponent } from './pages/login/login.component'
import { provideHttpClient } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, InputComponent, ButtonComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {}
