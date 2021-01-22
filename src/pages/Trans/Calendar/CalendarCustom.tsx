import React, { useEffect } from 'react';
import { get } from 'lodash';
import { Moment } from 'moment';
import moment from 'moment';
import { Calendar, Badge, Tag, Row, Col } from 'antd';
import CalendarDays from '@/pages/Trans/Calendar/CalendarDays';
import { connect } from 'umi';
import { IUserAccount } from '@/pages/User/types';
import { ICalendar, ITransaction } from './types';

interface IProps {
  getTransactions: (ownerId: string) => void;
  User: IUserAccount;
  Calendar: ICalendar;
}

const CalendarCustom = (props: IProps) => {
  const ownerId = get(props, 'User._id', '');
  const transactions = get(props, 'Calendar.transactions', []);

  function dateCellRender(value: Moment) {
    const allDayTransactions = transactions.filter((el: ITransaction) => {
      const transactionMoment = moment(el.transactionDate);
      return (
        transactionMoment.date() === value.date() &&
        transactionMoment.month() === value.month() &&
        transactionMoment.year() === value.year()
      );
    });

    return <CalendarDays transactions={allDayTransactions} />;
  }

  const onSelect = (date: Moment) => {
    console.log(moment('2020-01-17T06:48:16.965+00:00').format('LL'));
  };

  useEffect(() => {
    props.getTransactions(ownerId);
  }, []);

  return (
    <Calendar
      fullscreen={true}
      className="my-calendar"
      dateCellRender={dateCellRender}
      onSelect={onSelect}
    />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarCustom);
