import React from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 'c',
            temperature: ''
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature: temperature});
    }

    handleFahreheitChange = (temperature) => {
        this.setState({scale: 'f', temperature});
    }

    render(){
        const {scale, temperature} = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahreheitChange} />

                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator;