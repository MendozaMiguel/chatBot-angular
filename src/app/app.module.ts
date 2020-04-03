import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {ChatBot} from 'angular-ai-chat-bot';
// Add the following component
import { ChatInput } from 'angular-ai-chat-bot';
import { ChatMsg } from 'angular-ai-chat-bot';

// Imports modules
import { WrapperChatBotComponent } from './chatbot/chat-bot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    WrapperChatBotComponent,
    ChatBot,
    ChatInput,
    ChatMsg
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
