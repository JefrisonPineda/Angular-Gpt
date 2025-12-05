import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GptMessage, MyMessage, TextMessageBox, TextMessageBoxFile, TextMessageBoxSelect, TextMessageEvent, TypingLoader } from '@components/index';



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
