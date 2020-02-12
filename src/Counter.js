import React, { Component } from 'react';
import classes from './Counter.module.css';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.minCount
        }
    }
    // state = {
    //     count: 0
    // }

    onIncreamentClicked = () => {
        const upadatedValue = this.state.count + 1;
        if(upadatedValue <= this.props.maxCount){
            this.setState({count: upadatedValue})
            console.log(this.state.count);
        }
        // this.state.count + 1;
        // this.setState({count: this.state.count + 1})
    }
    onDecreamentClicked = () => {
        const upadatedValue = this.state.count - 1;
        if(upadatedValue >= this.props.minCount){
            this.setState({count: upadatedValue})
            console.log(this.state.count); 
        }
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.onIncreamentClicked}>Increament</button>
                <button onClick = {this.onDecreamentClicked}>Decreament</button>
            </div>
        );
    }
}

export default Counter;
