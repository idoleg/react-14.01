import React, {Component} from "react";
import PropTypes from "prop-types";

// export const Counter = () => <span>It's counter!</span>

// export default Counter //  Так не делеать. Использовать именованый импорт-экспорт

export class Counter extends Component {
    state = {
        //count: 0
    }
    static PropTypes = {
        count: PropTypes.number
    }

    interval = null;

    componentDidMount () {
        console.log("componentDidMount")
        this.interval = setInterval(() => console.log("Its fired!"), 2000)
    }
    /*
    componentWillMount () {  //It's a BAD practice to use this method!;)
        console.log ("componentWillMount - DONT USE")
    }
    */
    componentDidUpdate () {
        console.log ("componentDidUpdate")
    }
    componentWillUnmount () {
        console.log ("component Will Unmount")
        clearInterval(this.interval);
    }

    handleCount = (event) => {
        const num = +event.target.dataset.number;
        this.props.onCount(num);
    }
      
    render () {
        const {count} = this.props;
        return <span>
            <button data-number="-1" onClick={this.handleCount.bind(this)}>-1</button>
            {count}
            <button data-number="1" onClick={this.handleCount.bind(this)}>+1</button>
        </span>;
    } 
}