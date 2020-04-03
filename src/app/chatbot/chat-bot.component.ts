import { Component, OnInit } from '@angular/core';

import { ChatBot } from 'angular-ai-chat-bot';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class WrapperChatBotComponent implements OnInit {
  public accessToken = '0146bb6bc73f4ef4bbf44e82aa6af957';
  public msg =  new Subject<any>();
  constructor() {}

  ngOnInit() {
  }

  public onChange(message: string) {
    this.msg.next(message);
}
}
