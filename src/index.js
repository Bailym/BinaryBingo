import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "./index.css";
import NavBar from "./NavBar/navBar";
import Draw from "./Draw/draw";
import { Layout } from 'antd';
import BingoCard from './BingoCard/bingoCard';
import LandingPage from './LandingPage/landingPage';

const { Header, Content, Footer } = Layout;


function Index() {
  return (
    <Router basename='BinaryBingo'>
      <Layout className="layout">
        {/* <Header style={{ minHeight: "5vh" }}>
          <NavBar />
        </Header> */}
        <Content style={{ minHeight: "85vh" }}>
          <Routes>
            <Route path="/card" element={<BingoCard />} />
            <Route path="/draw" element={<Draw />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Content>
        <Footer className="footer">
          B Martin 2021
        </Footer>
      </Layout>
    </Router>)

}
ReactDOM.render(<Index />, document.getElementById('root'));  //render the componen - calls the render() function.







