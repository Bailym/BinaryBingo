
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './bingoCard.css';





class BingoCard extends React.Component {
    state = {
        numbers: []
    }

    componentDidMount = () => {

        //generate 4 random numbers between 0 and 15    
        let numbers = [];
        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * 16);

            //stop duplicate numbers
            while (numbers.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 16);
            }

            //add to list
            numbers.push(randomNumber);
        }

        //update state
        this.setState({
            numbers: numbers,
        });
    }

    //function to change button to red when clicked and vice versa
    changeColour = (e) => {
        let button = e.target;
        let currentColour = button.style.backgroundColor;

        if (currentColour === "rgb(255, 0, 0)") {
            button.style.backgroundColor = "rgb(51, 51, 51)";
        }
        else {
            button.style.backgroundColor = "rgb(255, 0, 0)";
        }
    }

    render = () => {
        //create a card for each number
        let cards = []
        for (var i = 0; i <= 3; i++) {
            cards.push(<Button onClick={this.changeColour} key={i} className='box' style={{ backgroundColor: "#333" }}>
                {this.state.numbers[i]}
            </Button>)
        }

        //render the bingo card
        return (
            <div className='container'>
                {cards}
            </div>
        )

    }

}


export default BingoCard;


