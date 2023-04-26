import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() isActive = false;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter<MouseEvent>();

  handleClick($event: MouseEvent): void {
    this.click.emit($event);
  }
}
