import { Component, Input, OnInit } from '@angular/core';

interface Expense {
  entryType: string;
  description: string;
  amount: number;
}

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {
  @Input() income: Expense;

  constructor() {}

  ngOnInit(): void {}
}
