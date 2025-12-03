import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GptMessage, MyMessage, TextMessageBox, TypingLoader } from '@components/index';



@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    GptMessage,
    MyMessage,
    TypingLoader,
    TextMessageBox,
  ],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPage {


  handleMessage( prompt:string ){
    console.log({ prompt });
  }

 }
