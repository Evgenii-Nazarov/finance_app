import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import ExpenseForm from '@/pages/Trans/Forms/ExpenseForm';
import IncomeForm from '@/pages/Trans/Forms/IncomeForm';

const AddForm = () => {
  const [transactionType, setTransactionType] = useState('expense');

  const changeType = (newValue: string) => {
    setTransactionType(newValue);
  };

  return (
    <>
      {transactionType === 'expense' && (
        <ExpenseForm
          transactionType={transactionType}
          changeType={changeType}
        />
      )}

      {transactionType === 'income' && (
        <IncomeForm transactionType={transactionType} changeType={changeType} />
      )}
    </>
  );
};

export default AddForm;
