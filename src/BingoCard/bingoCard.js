
import { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './bingoCard.css';



function BingoCard() {

    const [numbers, setNumbers] = useState([]);
    const [cards, setCards] = useState([]);

    //hook equivalent to componentDidMount() must have [] as the second parameter
    useEffect(() => {
        let tempNumbers = [];   //holds the numbers to be added to state

        //generate 4 random numbers between 0 and 15    
        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * 16);

            //stop duplicate numbers
            while (numbers.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 16);
            }
            //add to list
            tempNumbers.push(randomNumber);
        }
    
        setNumbers(tempNumbers);    //this wont update immediately. it will wait for the next render.   
    }, []);

    //when numbers updates on next render.
    useEffect(() => {
        //generate a card for each number
        let tempCards = [];
        for (var i = 0; i <= 3; i++) {
            tempCards.push(
                <Button onClick={changeColour} key={i} className='box' style={{ backgroundColor: "#333" }}>
                    {numbers[i]}
                </Button>);
        }
        setCards(tempCards)
    }, [numbers]);

    //function to change button to red when clicked and vice versa
    function changeColour(e) {
        let button = e.target;
        let currentColour = button.style.backgroundColor;

        if (currentColour === "rgb(255, 0, 0)") {
            button.style.backgroundColor = "rgb(51, 51, 51)";
        }
        else {
            button.style.backgroundColor = "rgb(255, 0, 0)";
        }
    }

    //render the bingo card
    return (
        <div className='container'>
            {cards}
        </div>
    )

}

export default BingoCard;


