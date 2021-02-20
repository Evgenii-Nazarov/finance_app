import React from 'react';
import { ITransaction } from '@/pages/Trans/Calendar/types';
import { get } from 'lodash';
import { Button, Col, Row } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import { ITransactionType, IUserAccount } from '@/pages/User/types';
import { IDrawer } from '@/pages/utils/DrawerCustom/types';

interface IProps {
  transaction: ITransaction;
  User: IUserAccount;
  open: (arg: IDrawer) => void;
}

const ListItem = (props: IProps) => {
  const transaction = get(props, 'transaction', []);
  const transactionTypes = get(props, 'User.transactionTypes', []);
  const name = get(transaction, 'name', false);
  // const transactionType = get(transaction, 'transactionType', []);
  const transactionTypeId = get(transaction, 'transactionTypeId', {});
  const value = get(transaction, 'value', {});
  const owner = get(transaction, 'owner', {});
  const transactionDate = get(transaction, 'transactionDate', {});

  const category = transactionTypes.filter(
    (el: ITransactionType) => el._id === transactionTypeId,
  )[0];
  const categoryType = get(category, 'type', '');
  const categoryName = get(category, 'name', '');
  const categoryParentId = get(category, 'parentId', '');

  let parentCategory = null;
  if (categoryParentId) {
    parentCategory = transactionTypes.filter(
      (el: ITransactionType) => el._id === categoryParentId,
    )[0];
  }
  const parentCategoryName = get(parentCategory, 'name', '');

  const transactionColor =
    categoryType === 'expense' ? 'expense-color' : 'income-color';

  const transactionSymbol = categoryType === 'expense' ? '-' : '+';

  const editButtonHandler = () => {
    props.open({
      title: 'Edit transaction',
      form: 'EditForm',
      visible: true,
      width: 600,
      data: { transaction },
    });
  };

  return (
    <Row
      className="transaction-border-bottom pb-1 mb-1"
      justify="space-between"
    >
      <Col>
        {name}
        {parentCategoryName ? (
          <p className="parent-color">
            {parentCategoryName}/{categoryName}
          </p>
        ) : (
          <p className="parent-color">{categoryName}</p>
        )}
      </Col>
      <Col>
        <span className={transactionColor}>{transactionSymbol}</span>
        <span className={transactionColor}>{value}</span>
        <Button
          onClick={editButtonHandler}
          size="small"
          type="dashed"
          icon={<EditOutlined />}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state: any) => ({
  User: state.User,
});

const mapDispatchToProps = (dispatch: any) => ({
  getTransactions: (payload: string) =>
    dispatch({ type: 'Calendar/getTransactions', payload }),
  open: (payload: IDrawer) => dispatch({ type: 'Drawer/open', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
