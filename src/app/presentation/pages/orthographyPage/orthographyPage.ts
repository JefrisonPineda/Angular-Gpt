import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GptMessage } from '../../components/chat-bubbles/gptMessage/gptMessage';
import { MyMessage } from '../../components/chat-bubbles/gptMessage/myMessage/myMessage';


@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    GptMessage,
    MyMessage,
  ],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPage { }
