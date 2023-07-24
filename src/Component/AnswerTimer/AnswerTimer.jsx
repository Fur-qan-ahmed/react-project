import "./AnswerTimer.scss";
import { useState, useEffect, useRef } from "react";
function AnswerTimer({ duration, onTimeUp }) {
    const [counter, setCounter] = useState(0);
    const [progressLoaded, setProgressLoaded] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter((cur) => cur + 1)
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);
    useEffect(() => {
        setProgressLoaded(100 * ( counter / duration ));
        if(counter === duration){
            clearInterval(intervalRef.current);
            setTimeout(() => {
                onTimeUp();
            }, 1000);
        }
    },[counter])
    return (
        <div className="answer-loader">
            <div
            style={{
                width : `${progressLoaded}%`,
                backgroundColor: `${
                    progressLoaded < 40 ?
                    'lightgreen' : 
                    progressLoaded < 80 ?
                    'yellow' :  
                    'rgb(209, 107, 107)'
                }`
            }} 
            className="progress-bar"
            ><span className={counter === duration ? 'timeup' : 'count'}>{counter === duration ? "Time Up" : counter + "s / 10s"}</span></div>
        </div>
    )
}

export default AnswerTimer