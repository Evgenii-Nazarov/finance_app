import React from 'react';
import { Moment } from 'moment';
import { ITransaction } from '@/pages/Trans/Calendar/types';
import { get } from 'lodash';

interface IProps {
  transactions: ITransaction[];
}

const CalendarDays = (props: IProps) => {
  const { transactions = [] } = props;

  const transactionsExpenses = transactions.filter(
    (el: ITransaction) => el.transactionType === 'expense',
  );
  const totalExpenses = transactionsExpenses.reduce(
    (acc: number, el: ITransaction) => acc + el.value,
    0,
  );

  const transactionIncome = transactions.filter(
    (el: ITransaction) => el.transactionType === 'income',
  );
  const totalIncome = transactionIncome.reduce(
    (acc: number, el: ITransaction) => acc + el.value,
    0,
  );

  return (
    <div className="calendar-cell ">
      <p className="my-red my-text-center">{`-${totalExpenses}`}</p>
      <p className="my-green my-text-center">{`+${totalIncome}`}</p>
    </div>
  );
};

export default CalendarDays;
