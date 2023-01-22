import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilledInputComponent } from './components/filled-input/filled-input.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilledInputComponent,
    ButtonComponent,
    CheckboxComponent,
    RegisterComponent,
    HomeComponent,
    DrawerComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
