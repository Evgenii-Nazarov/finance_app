import React from 'react';
import { Button, Modal } from 'antd';
import { get } from 'lodash';
import moment from 'moment';

import { IDrawer } from '@/pages/utils/DrawerCustom/types';
import { IModal } from '../../Forms/types';
import { ITransaction } from '@/pages/Trans/Calendar/types';
import TransactionList from './TransactionList';

interface IProps {
  onFinish: (arg: IDrawer) => void;
  onClose: () => void;
  modalState: IModal;
}

const CalendarModal = (props: IProps) => {
  const isOpen = get(props, 'modalState.isOpen', false);
  const transactions = get(props, 'modalState.transactions', []);
  const date = get(props, 'modalState.date', moment().format());

  const addButtonHandler = () => {
    props.onFinish({
      title: 'Add new transaction',
      form: 'AddForm',
      visible: true,
      width: 600,
      data: { date },
    });
  };

  return (
    <Modal
      title={`Transactions for ${date}`}
      visible={isOpen}
      onCancel={props.onClose}
      footer={[
        <Button key="back" onClick={props.onClose}>
          Close
        </Button>,
        <Button key="submit" type="primary" onClick={addButtonHandler}>
          Add transaction
        </Button>,
      ]}
    >
      <TransactionList transactions={transactions} />
      <Button onClick={props.onClose}>Change</Button>
    </Modal>
  );
};

export default CalendarModal;
