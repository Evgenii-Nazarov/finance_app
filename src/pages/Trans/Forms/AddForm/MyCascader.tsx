import React from 'react';
import { Cascader } from 'antd';
import { ITransactionType } from '@/pages/User/types';

interface IProps {
  expenseTransactionTypes?: ITransactionType[];
  form: any;
}

const MyCascader = (props: IProps) => {
  const { expenseTransactionTypes = [], form } = props;

  const newOptions = expenseTransactionTypes
    .filter((el: ITransactionType) => !el.parentId)
    .map((el: ITransactionType) => {
      const childes = expenseTransactionTypes
        .filter((type: ITransactionType) => type.parentId === el._id)
        .map((el: ITransactionType) => ({
          value: el._id,
          label: el.name,
        }));

      return {
        value: el._id,
        label: el.name,
        children: childes,
      };
    });

  const onChange = (value: any) => {
    const finalTransactionType = value[value.length - 1];

    form.setFieldsValue({ transactionTypeId: finalTransactionType });
  };

  return (
    <>
      <Cascader
        onChange={onChange}
        expandTrigger="hover"
        options={newOptions}
      />
    </>
  );
};

export default MyCascader;
