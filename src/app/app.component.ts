import { Component, Input } from '@angular/core';

interface Expense {
  entryType: string;
  description: string;
  amount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'expense-tracker';

  incomes: Expense[] = [
    { entryType: 'Income', description: 'Salary', amount: 1000 },
  ];

  expenses: Expense[] = [
    { entryType: 'Expense', description: 'Milk', amount: 10 },
  ];

  ledgerAdded(ledger: Expense) {
    if (ledger.entryType === 'Expense') {
      return this.expenses.push(ledger);
    }
    this.incomes.push(ledger);
  }
}
