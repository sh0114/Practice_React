import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

/** 물이끓고 있는지 확인하는 함수 */
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끓고 있어요!!</p>
    }else{
        return <p>물이 끓지 않아요.</p>
    }
}

/** 화씨 -> 섭씨 변환 함수 */
function toCelsius(f){
    return ((f-32) * 5) / 9;
}

/** 섭씨 -> 화씨 변환 함수 */
function toFahrenheit(c){
    return((c*9)/5)+32;
}

/** 입력한 온도에 따라 변환하는 함수 */
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    } // 숫자가 아닌 것 입력 시 empty string 반환

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    const celsius = scale === "f" ? tryConvert(temperature, toFahrenheit) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toCelsius) : temperature;

    return(
        <div>
            <TemperatureInput 
               scale='c' 
               temperature={celsius} 
               onTemperatureChange={handleCelsiusChange}
            />

            <TemperatureInput 
               scale='f' 
               temperature={fahrenheit} 
               onTemperatureChange={handleFahrenheitChange}
            />

            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )

}

export default Calculator;