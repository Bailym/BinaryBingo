
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Layout, Menu } from 'antd';
import BingoCard from './components/bingoCard';
import { Statistic, Card, Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;




class Draw extends React.Component {

    state = {
        numbersCalled: [],
        lastNumber: "",
    }

    pad = (str, max) => {
        str = str.toString();
        return str.length < max ? this.pad("0" + str, max) : str;
    }

    getNumber = () => {
        //generare a random number between 0 and 15
        let randomNumber = Math.floor(Math.random() * 16);
        //convert the number to binary
        let binaryNumber = randomNumber.toString(2);
        let paddedNum = this.pad(binaryNumber, 4)


 

        //check if paddedNum is in the array
        if(this.state.numbersCalled.length >= 16){
            alert("You have called all the numbers!")
        }
        else if (this.state.numbersCalled.includes(paddedNum)) {
            //if it is, get another number
            this.getNumber();
        }
        else {
            this.setState({
                lastNumber: paddedNum,
                numbersCalled: [...this.state.numbersCalled, paddedNum]
            })
        }
    }

    render = () => {
        return (
            <div style={{ width: "30vw", margin: "2vh auto" }}>
                <Title style={{ textAlign: "center", fontSize: "296px" }}>{this.state.lastNumber}</Title>
                <Button type="primary" style={{ margin: "0 auto", width: "100%", height: "5vh" }} onClick={() => this.getNumber()}>
                    Draw
                </Button>
            </div>
        )
    }

}


export default Draw