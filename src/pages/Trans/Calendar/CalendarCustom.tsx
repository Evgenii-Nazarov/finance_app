import React, { useEffect } from 'react';
import { get } from 'lodash';
import { Moment } from 'moment';
import moment from 'moment';
import { Calendar, Badge, Tag, Row, Col } from 'antd';
import CalendarDays from '@/pages/Trans/Calendar/CalendarDays';
import { connect } from 'umi';

interface IProps {
  data: any;
  getTransactions: (ownerId: string) => void;
}

const CalendarCustom = (props: IProps) => {
  const ownerId = get(props, 'User._id', '');
  console.log(ownerId);
  function dateCellRender(value: any) {
    return <CalendarDays />;
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
});

const mapDispatchToProps = (dispatch: any) => ({
  getTransactions: (payload: string) =>
    dispatch({ type: 'Calendar/getTransactions', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarCustom);
