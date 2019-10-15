import React from 'react';
import { Layout, Icon } from 'antd';
const { Header } = Layout;

const HeaderLayout = ({collapsed, toggle }) => {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
    </Header>
  );
};

export default HeaderLayout;
