import { Component, OnInit, Input } from '@angular/core';

import { ChatBot } from 'angular-ai-chat-bot';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class WrapperChatBotComponent implements OnInit {
  public accessToken = 'e95bf3cbc13b4c688cf8bde94ac35c95';
  public msg =  new Subject<any>();
  constructor() {}

  ngOnInit() {
  }

  public onChange(message: string) {
    this.msg.next(message);
  }
}
