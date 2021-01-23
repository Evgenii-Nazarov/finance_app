import React, { useState } from 'react';
import ExpenseForm from '@/pages/Trans/Forms/AddForm/ExpenseForm';
import IncomeForm from '@/pages/Trans/Forms/AddForm/IncomeForm';

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
