import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GptMessage, MyMessage, TextMessageBox, TextMessageBoxEvent, TextMessageBoxFile, TextMessageBoxSelect, TextMessageEvent, TypingLoader } from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from '../../services/openai.service';


@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    GptMessage,
    MyMessage,
    TypingLoader,

    TextMessageBox,
    TextMessageBoxFile,
    TextMessageBoxSelect
  ],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPage {

  public messages = signal<Message[]>([ { text:' Hola Mundo', isGpt: false} ]);
  public isLoading = signal(false);
  public OpenAiService = inject( OpenAiService );



  handleMessage( prompt:string ){

    console.log({ prompt });
  }

  handleMessageWithFile( {prompt, file}: TextMessageEvent ){
    
    console.log({ prompt, file });
  }

  handleMessageWithSelect( event: TextMessageBoxEvent ){
    console.log( event );
  }

 }
