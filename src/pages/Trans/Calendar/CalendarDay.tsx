import React from 'react';
import { ITransaction } from '@/pages/Trans/Calendar/types';
import { IDrawer } from '@/pages/utils/DrawerCustom/types';
import { connect } from 'umi';

interface IProps {
  transactions: ITransaction[];
}

const CalendarDay = (props: IProps) => {
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
    <div className="calendar-cell">
      <p className="my-red my-text-center">{`-${totalExpenses}`}</p>
      <p className="my-green my-text-center">{`+${totalIncome}`}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  open: (payload: IDrawer) => dispatch({ type: 'Drawer/open', payload }),
});

export default connect(null, mapDispatchToProps)(CalendarDay);
