import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import moment, { Moment } from 'moment';
import { Calendar } from 'antd';
import CalendarDay from '@/pages/Trans/Calendar/CalendarDay';
import { connect } from 'umi';
import { IUserAccount } from '@/pages/User/types';
import { ICalendar, ITransaction } from './types';
import CalendarModal from '@/pages/Trans/Calendar/CalendarModal/CalendarModal';
import { IDrawer } from '@/pages/utils/DrawerCustom/types';
import { IModal } from '../Forms/types';

interface IProps {
  getTransactions: (ownerId: string) => void;
  User: IUserAccount;
  Calendar: ICalendar;
  open: (arg: IDrawer) => void;
}

const CalendarCustom = (props: IProps) => {
  const ownerId = get(props, 'User._id', '');
  const transactions = get(props, 'Calendar.transactions', []);

  console.log(transactions);

  const [modalState, setModalState] = useState<IModal>({ isOpen: false });

  const filterTransactionsForDay = (day: Moment) => {
    return transactions.filter((el: ITransaction) => {
      const transactionMoment = moment(el.transactionDate);
      return (
        transactionMoment.date() === day.date() &&
        transactionMoment.month() === day.month() &&
        transactionMoment.year() === day.year()
      );
    });
  };

  function dateCellRender(value: Moment) {
    const allDayTransactions = filterTransactionsForDay(value);

    return <CalendarDay transactions={allDayTransactions} />;
  }

  const onSelect = (date: Moment) => {
    const allDayTransactions = filterTransactionsForDay(date);

    setModalState({
      isOpen: true,
      date: date,
      transactions: allDayTransactions,
    });
  };

  useEffect(() => {
    props.getTransactions(ownerId);
  }, []);

  const changeModalState = () => {
    setModalState({ isOpen: false });
  };

  return (
    <>
      <Calendar
        fullscreen={true}
        className="my-calendar"
        dateCellRender={dateCellRender}
        onSelect={onSelect}
      />
      <CalendarModal
        onFinish={props.open}
        modalState={modalState}
        onClose={changeModalState}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  DrawerData: state.Drawer,
  User: state.User,

  Calendar: state.Calendar,
});

const mapDispatchToProps = (dispatch: any) => ({
  getTransactions: (payload: string) =>
    dispatch({ type: 'Calendar/getTransactions', payload }),
  open: (payload: IDrawer) => dispatch({ type: 'Drawer/open', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarCustom);
