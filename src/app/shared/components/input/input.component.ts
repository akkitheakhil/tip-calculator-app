import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorLabels } from './models/input-model';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  protected object = Object;

  @Input() label: string = '';
  @Input() type: 'text' | 'number' = 'number';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() icon?: string;
  @Input() errorLabels: ErrorLabels = {};

  @Output() change = new EventEmitter<number | string>();

  handleInputChange(value: number | string): void {
    this.change.emit(value);
  }
}
