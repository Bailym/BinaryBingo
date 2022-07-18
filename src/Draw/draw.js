
import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Card, List, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;


function Draw() {

    //state hooks
    const [numbersCalled , setNumbersCalled] = React.useState([]);
    const [lastNumber, setLastNumber] = React.useState("");

    //pads a binary number with zeros to the left since 0001 is a valid binary number etc.
    function pad(str, max){
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }

    //generates a random binary number that isnt already in the numbersCalled array
    function getNumber(){

        //generare a random number between 0 and 15 (4 bits)
        let randomNumber = Math.floor(Math.random() * 16);
        //convert the number to binary
        let binaryNumber = randomNumber.toString(2);
        //pad the binary number to 4 bits
        let paddedNum = pad(binaryNumber, 4)

        //check if paddedNum is in the array
        if (numbersCalled.length >= 16) {
            alert("You have called all the numbers!")
        }
        else if (numbersCalled.includes(paddedNum)) {
            //if it is, get another number
            getNumber();
        }
        //if not then add it to the array.
        else {
            setLastNumber(paddedNum);
            setNumbersCalled(numbersCalled => [...numbersCalled, paddedNum]);   //adds the number to the array
        }
    }

    return (
        <div style={{ width: "80vw", margin: "2vh auto 0 auto", textAlign: "center" }}>
            <Title>How it Works...</Title>
            <Paragraph>
                <ul style={{ listStyleType: "none", fontSize: "2.5vw" }}>
                    <li style={{ padding: 0, margin: 0 }}>1. Students should go to the <a href="/card">card</a> page. This will give them a Bingo Card which they can tick off.</li>
                    <li style={{ padding: 0, margin: 0 }}>2. The teacher clicks the button below and calls out the random 4-bit binary number</li>
                    <li style={{ padding: 0, margin: 0 }}>3. Students will need to convert the 4-bit binary number into denary</li>
                    <li style={{ padding: 0, margin: 0 }}>4. If the number appears on a students card they should click the number to tick it off.</li>
                    <li style={{ padding: 0, margin: 0 }}>5. Repeat this process until a student has all numbers on their card ticked off.</li>
                </ul>
            </Paragraph>
            <Text style={{ fontSize: "10vw" }}>{lastNumber}</Text>
            <Button type="primary" style={{ margin: "0 auto 1vh auto", width: "100%", height: "5vh" }} onClick={() => getNumber()}>
                Draw
            </Button>
            <List
                grid={{
                    gutter: 16,
                    column: 8,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 8,
                    xxl: 8,
                }}
                dataSource={numbersCalled}
                renderItem={(item) => (
                    <List.Item>
                        <Card>{item}</Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Draw