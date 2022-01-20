import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import NavBar from "./components/navbar";
import Card from "./card";  //components from other files.
import Draw from "./draw";


import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

class Index extends React.Component {


  /* 
  render the basic layout of the app
  HEADER: Where you render the nav bar (inside the components folder /src/components/navbar.js)

  CONTENT:  The main content of the page. Render a component depending on the URL (/card or /draw)

  FOOTER: Anything you want really. I just put my name.

  Notes: 
    - every React component needs a render() method. HTML + CSS goes here. This is what is shown when the component is loaded.
    - CSS can be added within this file by adding a style attribute inside a HTML tag e.g. <div style = {{color: "red"}}>. Or just use a seperate CSS file and import it at the top.
    - If you're using VS Code, install Github copilot extenstion. Its awesome!
  */


  //you can write js functions in here too like normal.
  ExampleFunction = () => {
    //generate a random number between 1 and 10
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    //return the random number
    return randomNumber;
  }


  //render is a function that is called when the component is rendered
  render = () => {

    return (<Router>
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

ReactDOM.render(<Index />, document.getElementById('root'));  //render the componen - calls the render() function.
export default Index; //Allows this component to be used in other files. Probably not needed.







