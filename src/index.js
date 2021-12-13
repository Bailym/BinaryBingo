import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import NavBar from "./components/navbar";
import Card from "./card";
import Draw from "./draw";


import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

class Index extends React.Component {

  render = () => {
    
    return(<Router>
      <Layout className="layout" style={{ minHeight: "100vh" }}>

        <Header style={{ minHeight: "5vh" }}>
          <NavBar />
        </Header>


        <Content style={{ padding: '0 50px', minHeight: "85vh" }}>
          <Routes>
            <Route path="/card" element={<Card />} />
            <Route path="/draw" element={<Draw />} />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center', minHeight: "5vh" }}>
          B Martin 2021
        </Footer>
      </Layout>
    </Router>)

  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
export default Index;
  






