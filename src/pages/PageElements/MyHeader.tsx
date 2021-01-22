import React, { useEffect } from 'react';
import { get } from 'lodash';
import { Affix, Button, Layout, Menu } from 'antd';
import { connect, Link, withRouter } from 'umi';
import { IDrawer } from '@/pages/utils/DrawerCustom/types';
const { Header, Content, Footer } = Layout;

interface IProps {
  open: (arg: IDrawer) => void;
}

const MyHeader = (props: IProps) => {
  const location = get(props, 'location.pathname', '');

  useEffect(() => {
    addNew();
  }, []);

  const addNew = () => {
    props.open({
      title: 'Add new transaction',
      form: 'AddForm',
      visible: true,
      width: 600,
      data: {},
    });
  };

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item onClick={addNew}>Add new</Menu.Item>
        <Menu.Item key="2">Transactions</Menu.Item>
        <Menu.Item key="3">Stats</Menu.Item>
        <Menu.Item key="4">About</Menu.Item>
      </Menu>
    </Header>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  open: (payload: IDrawer) => dispatch({ type: 'Drawer/open', payload }),
});

export default withRouter(connect(null, mapDispatchToProps)(MyHeader));
