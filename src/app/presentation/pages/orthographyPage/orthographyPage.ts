import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GptMessage } from '../../components/chat-bubbles/gptMessage/gptMessage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    GptMessage,
  ],
  templateUrl: './orthographyPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPage { }
