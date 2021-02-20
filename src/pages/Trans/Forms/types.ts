import { Moment } from 'moment';
import { ITransaction } from '@/pages/Trans/Calendar/types';

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

export interface IModal {
  isOpen: boolean;
  date?: Moment;
  transactions?: ITransaction[];
}
