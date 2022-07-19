
import { useEffect, useState } from 'react';
import "./draw.css";



function Draw() {

    //state hooks
    const [numbersCalled, setNumbersCalled] = useState([]);
    const [lastNumber, setLastNumber] = useState("");
    const [numberComponents, setNumberComponents] = useState([]);
    const [numsHidden, setNumsHidden] = useState(false);

    //pads a binary number with zeros to the left since 0001 is a valid binary number etc.
    function pad(str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }

    //generates a random binary number that isnt already in the numbersCalled array
    function getNumber() {

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

    //when numberscalled changes, this function is called.
    useEffect(() => {
        let newComponent = <li className='numbers-list-item'>{lastNumber}</li>
        setNumberComponents(numberComponents => [...numberComponents, newComponent]);
    }, [numbersCalled]);


    function toggleHideNums() {
        setNumsHidden(!numsHidden);
    }

    return (
        <div className="draw-container">
            <div id="title-div">
                <a href={process.env.PUBLIC_URL + "/"}><img id='back-icon' src={process.env.PUBLIC_URL + "/BackArrow.png"} alt="back to landing page" /></a>
                <h1>HOW IT WORKS.</h1>
                <div className='column-3'></div>
            </div>

            <div id="rules-div">
                <ul>
                    <li>1. Students should go to the <a href="/card">card</a> page. This will give them a Bingo Card which they can tick off.</li>
                    <li>2. The teacher clicks the button below and calls out the random 4-bit binary number</li>
                    <li>3. Students will need to convert the 4-bit binary number into denary</li>
                    <li>4. If the number appears on a students card they should click the number to tick it off.</li>
                    <li>5. Repeat this process until a student has all numbers on their card ticked off.</li>
                </ul>
            </div>

            <div id="draw-div">
                <div id="numbers-list-div">
                    {!numsHidden ?
                        <ul id="numbers-list">
                            <h3>Numbers Called</h3>
                            {numberComponents}
                            <li className='numbers-list-item hide-list' onClick={() => toggleHideNums()}>[HIDE]</li>
                        </ul> :
                        <p onClick={() => toggleHideNums()} id="open-numbers-list">[Show]</p>}
                </div>

                <div id="draw-controls">
                    <h2>{lastNumber !== "" ? lastNumber : "????"}</h2>
                    <button className='draw-button' onClick={() => getNumber()}> Draw</button>
                </div>
                <div className="column-3">

                </div>
            </div>
        </div>
    )
}

export default Draw