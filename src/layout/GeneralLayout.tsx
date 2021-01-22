import React from 'react';
import { Link } from 'umi';
import { get } from 'lodash';
import { Affix, Button, Layout, Menu } from 'antd';
import '@/styles.css';
const { Header, Content, Footer } = Layout;
import { DownloadOutlined } from '@ant-design/icons';
import MyHeader from '@/pages/PageElements/MyHeader';
import DrawerCustom from '@/pages/utils/DrawerCustom/DrawerCustom';

interface IProps {
  children: any;
}

interface IPath {
  path: string;
}

export default (props: IProps) => {
  const pathname = get(props, 'location.pathname', '');
  const routes = get(props, 'route.routes', []);

  const permissionRoute = routes.find((el: IPath) => el.path === pathname);
  const permission = get(permissionRoute, 'permission', '');

  return (
    <Layout className="layout">
      {/*<nav className="navbar">*/}
      {/*  <div className="container">*/}
      {/*    <Link to="/" className="site-name">*/}
      {/*      <img src={''} alt="Local Coding Logo" height={24} className="logo mr-2" />*/}
      {/*      Local Coding*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</nav>*/}

      <MyHeader />

      <Content className="container mt-4" style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>

      {/*<div className="container mt-4">*/}
      {/*    {props.children}*/}
      {/*</div>*/}

      {/*<Footer style={{ textAlign: 'center' }}>*/}
      {/*  Ant Design ©2018 Created by Ant UED*/}
      {/*</Footer>*/}

      <Footer className="mt-auto mb-15rem small" data-qa="footer">
        <div className="container mt-4">
          If you have any questions or concerns, please{' '}
          <Link to="/contact" data-qa="footerContactUs">
            contact us.
          </Link>{' '}
          <br />
          <Link to={'/terms'} className="mr-4" data-qa="footerTerms">
            Terms of Service
          </Link>{' '}
          <Link to={'/privacy'} data-qa="footerPrivacy">
            Privacy Policy
          </Link>
        </div>
      </Footer>

      <Affix
        offsetTop={550}
        style={{ position: 'absolute', left: '70%', zIndex: 999 }}
      >
        <Button
          shape="round"
          type="primary"
          icon={<DownloadOutlined />}
          size={'large'}
        >
          Add
        </Button>
      </Affix>
      <DrawerCustom />
    </Layout>
  );
};
