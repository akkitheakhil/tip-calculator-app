import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.scss'],
})
export class ResultViewerComponent {
  @Input() text: string = '';
  @Input() subText: string = '';
  @Input() value: number = 0;
  @Input() symbol: string = 'USD';
}
