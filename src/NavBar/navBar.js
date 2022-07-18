
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

var navHeaders = ["Draw", "Card", "About"];


function NavBar() {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            {navHeaders.map((value, i) => {
                return <Menu.Item key={i}  ><Link to={value.toLowerCase()}>{value}</Link></Menu.Item>;
            })}
        </Menu>)
}

export default NavBar;