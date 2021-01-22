export interface ICalendar {
  transactions?: ITransaction[];
}

export interface ITransaction {
  _id?: string;
  name?: string;
  transactionType?: string;
  transactionTypeId?: string;
  value: number;
  owner: string;
  transactionDate: Date;
}
