import { Component, computed, OnInit, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorLabels } from './shared/components/input/models/input-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private billAmount = signal(0);
  private persons = signal(0);
  protected tip = signal(0);

  protected tipAmount = computed(
    () => (this.tip() * this.billAmount()) / 100 || 0
  );

  protected tipAmountPerPerson = computed(
    () => this.tipAmount() / this.persons() || 0
  );

  protected totalAmount = computed(
    () => (this.billAmount() + this.tipAmount()) / this.persons() || 0
  );

  protected commonControlErrors: ErrorLabels = {
    required: 'This is required',
    min: `Cant't be zero`,
  };

  protected billControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
  ]);

  protected personControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
  ]);

  protected tipSelectors = [5, 10, 15, 25, 50];

  ngOnInit(): void {}

  protected handleTipSelection(tip: number | string): void {
    tip = Number(tip);
    if (isNaN(tip)) {
      return;
    }
    this.tip.set(tip);
  }

  protected handleBillAmountChange(bill: number | string): void {
    bill = Number(bill);
    if (isNaN(bill)) {
      return;
    }
    this.billAmount.set(bill);
  }

  protected handlePersonChange(person: number | string): void {
    person = Number(person);
    if (isNaN(person)) {
      return;
    }
    this.persons.set(person);
  }

  protected handleReset(): void {
    this.persons.set(0);
    this.billAmount.set(0);
    this.tip.set(0);
    this.billControl.reset();
    this.personControl.reset();
  }
}
