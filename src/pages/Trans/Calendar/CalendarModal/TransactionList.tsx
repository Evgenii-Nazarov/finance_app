import React from 'react';
import { ITransaction } from '@/pages/Trans/Calendar/types';
import { get } from 'lodash';
import { List } from 'antd';
import ListItem from '@/pages/Trans/Calendar/CalendarModal/ListItem';

interface IProps {
  transactions: ITransaction[];
}

const TransactionList = (props: IProps) => {
  const { transactions = [] } = props;

  const incomeTransactions = transactions.filter(
    (el: ITransaction) => el.transactionType === 'income',
  );
  const expenseTransactions = transactions.filter(
    (el: ITransaction) => el.transactionType === 'expense',
  );

  return (
    <>
      {transactions.map((el: ITransaction) => (
        <ListItem key={el._id} transaction={el} />
      ))}
      {/*<List*/}
      {/*  header={<div>Income</div>}*/}
      {/*  size="small"*/}
      {/*  bordered*/}
      {/*  dataSource={transactions}*/}
      {/*  renderItem={(item) => <ListItem key={item._id} transaction={item} />}*/}
      {/*/>*/}

      {/*{transactions.map((el: ITransaction) => (*/}
      {/*  <ListItem key={el._id} transaction={el} />*/}
      {/*))}*/}
    </>
  );
};

export default TransactionList;
