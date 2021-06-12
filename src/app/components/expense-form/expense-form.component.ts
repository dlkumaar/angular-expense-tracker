import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Expense {
  entryType: string;
  description: string;
  amount: number;
}

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  entryTypes: string[] = ['Income', 'Expense'];
  selectedEntry: string = 'Income';

  @Output() formSubmitEvent = new EventEmitter<Expense>();

  // form Inputs
  description: Expense['description'];
  amount: Expense['amount'];

  constructor() {}

  ngOnInit(): void {}

  selectEntryType(event: any) {
    this.selectedEntry = event.target.value;
  }

  onUpdateDescription(event: any) {
    this.description = event.target.value;
  }

  onUpdateAmount(event: any) {
    this.amount = event.target.value;
  }

  onFormSubmit() {
    const formInput = {
      entryType: this.selectedEntry,
      description: this.description,
      amount: this.amount,
    };

    this.formSubmitEvent.emit(formInput);
  }
}
