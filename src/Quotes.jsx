import { useState, useEffect } from "react";
import axios from "axios";
import diceImg from './images/icon-dice.svg';
import patern1 from './images/pattern-divider-mobile.svg';
import patern2 from './images/pattern-divider-desktop.svg';
const Quotes = () => {
    const URL = "https://api.adviceslip.com/advice";

    const [advice, setAdvice] = useState('');
    const getAdvices = async () => {
        const response = await axios.get(URL);
        const advices = await response.data.slip;
        setAdvice(advices);
    };

    useEffect(() => {
        getAdvices()
    }, []);

    const handleAdvices = () => {
        getAdvices()
    }
    return (
        <div className="container">
            <div>
                <p>ADVICE <span>#{advice.id}</span></p>
                <h1>"{advice.advice}"</h1>
            </div>
            <div>
                <picture>
                    <source srcSet={patern2} media="(width > 760px)" />
                    <img src={patern1} alt="" />
                </picture>
            </div>
            <div>
                <button onClick={handleAdvices}>
                    <img className="diceImg" src={diceImg} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Quotes;
