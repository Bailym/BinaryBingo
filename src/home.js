
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu } from 'antd';
import BingoCard from './components/bingoCard';





class Home extends React.Component {

    render = () =>{
        return(
            <BingoCard/>
        )
    }

}


export default Home;