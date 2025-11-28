import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gpt-message',
  standalone: true,
  imports: [],
  templateUrl: './gptMessage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GptMessage { }
