import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import NavBar from "./NavBar/navBar";
import Draw from "./Draw/draw";
import { Layout } from 'antd';
import BingoCard from './BingoCard/bingoCard';
import LandingPage from './LandingPage/landingPage';

const { Header, Content, Footer } = Layout;


function Index() {
  return (
  <Router>
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header style={{ minHeight: "5vh" }}>
        <NavBar />
      </Header>
      <Content style={{minHeight: "85vh" }}>
        <Routes>
          <Route path="/card" element={<BingoCard />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center', minHeight: "5vh" }}>
        B Martin 2021
      </Footer>
    </Layout>
  </Router>)

}
ReactDOM.render(<Index />, document.getElementById('root'));  //render the componen - calls the render() function.







