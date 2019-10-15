import React, {useState, useCallback} from 'react'
import { Layout } from 'antd';
import LeftMenu from './LeftMenu';
import HeaderLayout from './HeaderLayout';
const { Content } = Layout;




const AppLayout = ({children}) => {

  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(()=>{
    setCollapsed(!collapsed);
  },[]);

  return (
    <Layout
      style={{
        height: '100%',
      }}
    >
      <LeftMenu collapsed={collapsed} />
      <Layout>
        <HeaderLayout collapsed={collapsed} toggle={toggle}/>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            height: '100%',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
