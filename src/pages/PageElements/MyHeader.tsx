import React, { useEffect } from 'react';
import { get } from 'lodash';
import { Affix, Button, Col, Layout, Menu, Row } from 'antd';
import { connect, Link, withRouter } from 'umi';
import { IDrawer } from '@/pages/utils/DrawerCustom/types';
const { Header, Content, Footer } = Layout;
import { DownloadOutlined } from '@ant-design/icons';

interface IProps {
  open: (arg: IDrawer) => void;
}

const MyHeader = (props: IProps) => {
  const location = get(props, 'location.pathname', '');

  useEffect(() => {}, []);

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
    <Affix
      offsetTop={0}
      style={{
        // position: 'absolute', left: '80%',
        zIndex: 999,
      }}
    >
      <Header>
        <div className="logo" />
        <Row justify="space-between">
          <Col span={16}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              {/*<Menu.Item onClick={addNew}>Add new</Menu.Item>*/}
              <Menu.Item key="2">Transactions</Menu.Item>
              <Menu.Item key="3">Stats</Menu.Item>
              <Menu.Item key="4">About</Menu.Item>
            </Menu>
          </Col>
          <Col>
            <Button
              shape="round"
              type="primary"
              icon={<DownloadOutlined />}
              onClick={addNew}
              size={'large'}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Header>
    </Affix>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  open: (payload: IDrawer) => dispatch({ type: 'Drawer/open', payload }),
});

export default withRouter(connect(null, mapDispatchToProps)(MyHeader));
