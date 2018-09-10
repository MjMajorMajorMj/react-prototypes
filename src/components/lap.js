import React, { Component } from 'react';

class Lap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0,
            laps: []
        }
    }
    componentWillReceiveProps(nextProps) {
        const { lapTime } = nextProps;
        const sec = lapTime / 1000;
        const min = sec / 60;
        this.setState({
            hour: Math.floor(min / 60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(lapTime % 100)
        });
        this.formatTime();
    }
    formatTime() {
        const { hour, min, sec, ms, laps} = this.state;
        laps.push(hour + ":" + min + ":" + sec + "." + ms);
    }
    render() {
        const { laps } = this.state
        console.log(laps);
        return (
            <div>
               <p>{this.elapsed}</p>
            </div>
        )
    }
}

export default Lap;
