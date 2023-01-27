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
import { ChatroomHeaderComponent } from './components/chatroom/chatroom-header/chatroom-header.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { DrawerItemComponent } from './components/drawer/drawer-item/drawer-item.component';
import { UploadPostFormComponent } from './components/upload-post-form/upload-post-form.component';
import { PostComponent } from './components/post/post.component';
import { PostActionButtonComponent } from './components/post/post-action-button/post-action-button.component';
import { VerticalSeperatorComponent } from './components/vertical-seperator/vertical-seperator.component';
import { ChatItemComponent } from './components/chatroom/chat-item/chat-item.component';
import { StartChatMessageComponent } from './components/chatroom/start-chat-message/start-chat-message.component';
import { StartChatItemComponent } from './components/chatroom/start-chat-item/start-chat-item.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { InboxWindowComponent } from './components/inbox-window/inbox-window.component';

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
    ChatroomComponent,
    ChatroomHeaderComponent,
    AvatarComponent,
    DrawerItemComponent,
    UploadPostFormComponent,
    PostComponent,
    PostActionButtonComponent,
    VerticalSeperatorComponent,
    ChatItemComponent,
    StartChatMessageComponent,
    StartChatItemComponent,
    ChatWindowComponent,
    InboxWindowComponent
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
