import React, { useEffect, useState } from 'react';
import ExpenseForm from '@/pages/Trans/Forms/EditForm/ExpenseForm';
import IncomeForm from '@/pages/Trans/Forms/EditForm/IncomeForm';
import { connect } from 'umi';
import { IDrawer } from '@/pages/utils/DrawerCustom/types';
import { get } from 'lodash';
import { IUserAccount } from '@/pages/User/types';

interface IProps {
  Drawer: IDrawer;
  User: IUserAccount;
}

const EditForm = (props: IProps) => {
  const defaultValues = get(props, 'Drawer.data.transaction');
  const defaultTransactionType = get(defaultValues, 'transactionType');
  const userTransactionTypes = get(props, 'User.transactionTypes');
  const owner = get(props, 'User._id');

  const [transactionType, setTransactionType] = useState(
    defaultValues.transactionType,
  );

  const changeType = (newValue: string) => {
    setTransactionType(newValue);
  };

  useEffect(() => {
    // if (defaultValues.transactionType === 'income') setTransactionType('income')
  }, []);

  return (
    <>
      {transactionType === 'expense' && (
        <ExpenseForm
          transactionType={transactionType}
          userTransactionTypes={userTransactionTypes}
          owner={owner}
          defaultValues={defaultValues}
          changeType={changeType}
        />
      )}

      {transactionType === 'income' && (
        <IncomeForm
          transactionType={transactionType}
          userTransactionTypes={userTransactionTypes}
          owner={owner}
          defaultValues={defaultValues}
          changeType={changeType}
        />
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  Drawer: state.Drawer,
  User: state.User,
});

const mapDispatchToProps = (dispatch: any) => ({
  close: () => dispatch({ type: 'Drawer/close' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
