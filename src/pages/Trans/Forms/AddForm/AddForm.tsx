import React, { useState } from 'react';
import ExpenseForm from '@/pages/Trans/Forms/AddForm/ExpenseForm';
import IncomeForm from '@/pages/Trans/Forms/AddForm/IncomeForm';
import { connect } from 'umi';
import { IDrawer } from '@/pages/utils/DrawerCustom/types';
import { get } from 'lodash';

interface IProps {
  Drawer: IDrawer;
}

const AddForm = (props: IProps) => {
  const defaultDate = get(props, 'Drawer.data.date');

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
          defaultDate={defaultDate}
        />
      )}

      {transactionType === 'income' && (
        <IncomeForm
          defaultDate={defaultDate}
          transactionType={transactionType}
          changeType={changeType}
        />
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  Drawer: state.Drawer,
});

const mapDispatchToProps = (dispatch: any) => ({
  close: () => dispatch({ type: 'Drawer/close' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
