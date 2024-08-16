import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InputComponent } from './components/input/input.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ButtonComponent } from './components/button/button.component'

@NgModule({
  declarations: [AppComponent, InputComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
