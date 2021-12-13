
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu } from 'antd';

const { Header } = Layout;

var navHeaders = ["Home", "About", "Contact"];

class NavBar extends React.Component {

    render() {
        return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            {navHeaders.map((value, i) => {
                return <Menu.Item key={i}>{value}</Menu.Item>;
            })}
        </Menu>)
    }

}


export default NavBar;