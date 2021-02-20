import React, { useEffect } from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import { connect } from 'umi';
import { get as getl, get } from 'lodash';
import { ICreateTransaction, IExpenseForm } from '../types';
import MyCascader from '@/pages/Trans/Forms/EditForm/MyCascader';
import { ITransactionType, IUserAccount } from '@/pages/User/types';
import { ITransaction } from '@/pages/Trans/Calendar/types';
import moment from 'moment';

export const validator = {
  require: {
    required: true,
    message: 'Required',
  },
};

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 1, span: 16 },
};

interface IProps {
  changeType: (arg: string) => void;
  createTransactions: (arg: ICreateTransaction) => void;
  userTransactionTypes: ITransactionType[];
  transactionType: string;
  owner: string;
  defaultValues: ITransaction;
}

const ExpenseForm = (props: IProps) => {
  const transactionType = get(props, 'transactionType', '');
  const initialValues = get(props, 'defaultValues', {});
  const userTransactionTypes = get(props, 'userTransactionTypes', []);
  const owner = get(props, 'props.owner', []);
  const initialCategoryId = get(initialValues, 'transactionTypeId');

  const initialDate = get(initialValues, 'transactionDate');
  const initialDateMoment = moment(initialDate);

  let initialCategoryArray = [initialCategoryId];
  const initialCategory =
    userTransactionTypes.find(
      (el: ITransactionType) => el._id === initialCategoryId,
    ) || {};

  if (initialCategory.parentId) {
    const initialParentCategory =
      userTransactionTypes.find(
        (el: ITransactionType) => el._id === initialCategory.parentId,
      ) || {};
    initialCategoryArray.unshift(initialParentCategory._id);
  }

  const [form] = Form.useForm();

  const expenseTransactionTypes = userTransactionTypes.filter(
    (el: ITransactionType) => el.type === 'expense',
  );

  const onFinish = (values: IExpenseForm) => {
    const transactionDateMoment = getl(values, 'transactionDate');
    const transactionDateString = transactionDateMoment.format();

    console.log(values);

    // props.createTransactions({
    //   ...values,
    //   transactionDate: transactionDateString,
    //   owner,
    // });
  };

  useEffect(() => {
    // form.setFieldsValue({ value: 100 });
  }, []);

  return (
    <Form
      {...layout}
      form={form}
      name="basic"
      initialValues={{
        transactionType,
        ...initialValues,
        transactionDate: initialDateMoment,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Type"
        name="transactionType"
        rules={[validator.require]}
      >
        <Radio.Group>
          <Radio.Button
            value="expense"
            onClick={() => props.changeType('expense')}
          >
            Expense
          </Radio.Button>
          <Radio.Button
            value="income"
            onClick={() => props.changeType('income')}
          >
            Income
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Date:"
        name="transactionDate"
        rules={[validator.require]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Category:"
        name="transactionTypeId"
        rules={[validator.require]}
      >
        <MyCascader
          form={form}
          expenseTransactionTypes={expenseTransactionTypes}
          initialValues={initialCategoryArray}
        />
      </Form.Item>

      <Form.Item label="Title:" name="name" rules={[validator.require]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Amount"
        name="value"
        rules={[
          validator.require,
          { type: 'number', message: 'Numbers only!' },
        ]}
      >
        <InputNumber min={1} max={9999999} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  createTransactions: (payload: ICreateTransaction) =>
    dispatch({ type: 'Calendar/createTransaction', payload }),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
