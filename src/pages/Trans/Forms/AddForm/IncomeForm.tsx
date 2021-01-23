import React from 'react';
import { Button, Form, InputNumber, Radio } from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 16 },
};

interface IForm {
  transactionType: SizeType;
}

interface IProps {
  changeType: (arg: string) => void;
  transactionType: string;
}

const IncomeForm = (props: IProps) => {
  const { transactionType } = props;

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFormChange = (values: IForm) => {
    const { transactionType } = values;
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ transactionType }}
      onValuesChange={onFormChange}
      onFinish={onFinish}
    >
      <Form.Item label="Type" name="transactionType">
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
        label="transaction"
        name="transaction"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        {/*<MyCascader />*/}
      </Form.Item>

      <Form.Item
        label="Income Value"
        name="value"
        rules={[
          { required: true, message: 'Please input income amount!' },
          { type: 'number', min: 1, message: 'Cannot be less than 1' },
        ]}
      >
        <InputNumber placeholder="" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default IncomeForm;
