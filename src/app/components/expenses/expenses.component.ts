import { Component, Input, OnInit } from '@angular/core';

interface Expense {
  entryType: string;
  description: string;
  amount: number;
}
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  @Input() expense: Expense;

  constructor() {}

  ngOnInit(): void {}
}
