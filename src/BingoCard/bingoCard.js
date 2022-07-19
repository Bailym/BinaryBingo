
import { useEffect, useState } from 'react';
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
            while (tempNumbers.includes(randomNumber)) {
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
                <button onClick={changeColour} key={i} className='box'>
                    {numbers[i]}
                </button>);
        }
        setCards(tempCards)
    }, [numbers]);

    //function to change button to red when clicked and vice versa
    function changeColour(e) {
        let button = e.target;
        let currentColour = button.style.backgroundColor;

        console.log(currentColour)

        //if pink, change to white
        if (currentColour === "rgb(251, 97, 189)") {
            button.style.backgroundColor = "rgb(255,255,255)";
            button.style.color = 'rgb(235, 235, 235)'
        }
        //else change to pink.
        else {
            button.style.backgroundColor = "rgb(251, 97, 189)";
            button.style.color = 'rgb(255, 255, 255)'
        }
    }

    //render the bingo card
    return (
        <div className="card-div">
            <div id="title-div">
                <a href={process.env.PUBLIC_URL + "/"}><img id='back-icon' src={process.env.PUBLIC_URL + "/BackArrow.png"} alt="back to landing page" /></a>
                <h1>HOW IT WORKS.</h1>
                <div className='column-3'></div>
            </div>

            <div id="rules-div">
                <ul>
                    <li>1. The teacher will call out a random 4-bit binary number</li>
                    <li>2. Students will need to convert the 4-bit binary number into denary</li>
                    <li>3. If the number appears on your card below, click the number to tick it off.</li>
                    <li>4. Repeat. If you tick off all numbers on your card call out 'BINGO'.</li>
                </ul>
            </div>
            <div className='card-container'>
                {cards}
            </div>
        </div>

    )

}

export default BingoCard;


