import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperChatBotComponent } from './chatbot/chat-bot.component';


const routes: Routes = [
{
    path: 'chatbot',
    component: WrapperChatBotComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
