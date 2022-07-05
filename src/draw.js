
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Card, List, Typography } from 'antd';
import Item from 'antd/lib/list/Item';
const { Title, Paragraph, Text } = Typography;

class Draw extends React.Component {

    state = {
        numbersCalled: [],
        lastNumber: "????",
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
        if (this.state.numbersCalled.length >= 16) {
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
            <div style={{ width: "50vw", margin: "2vh auto 0 auto", textAlign: "center", justifyItems: "center" }}>
                <Title>How it Works...</Title>
                <Paragraph>
                    <ul style={{ listStyleType: "none", fontSize: "32px" }}>
                        <li>1. Students should go to the <a href="/card">card</a> page. This will give them a Bingo Card which they can tick off.</li>
                        <li>2. The teacher clicks the button below and calls out the random 4-bit binary number</li>
                        <li>3. Students will need to convert the 4-bit binary number into denary</li>
                        <li>4. If the number appears on a students card they should click the number to tick it off.</li>
                        <li>5. Repeat this process until a student has all numbers on their card ticked off.</li>
                    </ul>
                </Paragraph>
                <Text style={{ fontSize: "296px" }}>{this.state.lastNumber}</Text>
                <Button type="primary" style={{ margin: "0 auto 1vh auto", width: "100%", height: "5vh" }} onClick={() => this.getNumber()}>
                    Draw
                </Button>
                <List
                    grid={{
                        gutter: 16,
                        column: 8,
                    }}
                    dataSource={this.state.numbersCalled}
                    renderItem={(item) => (
                        <List.Item>
                            <Card>{item}</Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }

}


export default Draw