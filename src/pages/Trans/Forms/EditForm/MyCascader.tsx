import React from 'react';
import { Cascader } from 'antd';
import { ITransactionType } from '@/pages/User/types';

interface IProps {
  expenseTransactionTypes?: ITransactionType[];
  form: any;
  initialValues: string[];
}

const MyCascader = (props: IProps) => {
  const { expenseTransactionTypes = [], form } = props;
  let { initialValues } = props;

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

  // if (
  //   !expenseTransactionTypes.some(
  //     (el: ITransactionType) => el._id === initialValues[0],
  //   )
  // ) {
  //   initialValues = [];
  // }

  const onChange = (value: any) => {
    const finalTransactionType = value[value.length - 1];

    form.setFieldsValue({ transactionTypeId: finalTransactionType });
  };

  return (
    <>
      <Cascader
        defaultValue={initialValues}
        onChange={onChange}
        expandTrigger="hover"
        options={newOptions}
      />
    </>
  );
};

export default MyCascader;
