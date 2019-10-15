import React, { Component } from 'react';
import Main from './pages/main';
import AppLayout from './components/layout/components/AppLayout';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Main/>
      </AppLayout>

    );
  }
}

export default App;
