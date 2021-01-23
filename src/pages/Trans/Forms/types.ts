import { Moment } from 'moment';

export interface IExpenseForm {
  name: string;
  transactionType: string;
  transactionDate: Moment;
  transactionTypeId: string;
  value: number;
}

export interface ICreateTransaction {
  name: string;
  transactionType: string;
  transactionDate: string;
  transactionTypeId: string;
  value: number;
  owner: string;
}
