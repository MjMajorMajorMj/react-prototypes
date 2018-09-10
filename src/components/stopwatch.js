import React, { Component } from 'react';
import Time from './format_time';
import Lap from './lap';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0,
            lapArray: []
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
        this.lap = this.lap.bind(this);
    };
    start() {
        const { start, elapsed } = this.state;
        let newStart = new Date().getTime();
        if (start) {
            newStart = newStart - elapsed;
        };
        this.setState({
            status: 'running',
            start: newStart
        });
        setTimeout(this.update, 10);
    };
    stop() {
        this.setState({
            status: 'stopped'
        })
    };
    update() {
        const { status, start } = this.state;
        if (status === 'running') {
            this.setState({
                ...this.state,
                elapsed: new Date().getTime() - start,
            })
            setTimeout(this.update, 10);
        }
    };
    reset() {
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0,
            lapArray: []
        })
    }
    lap() {
        const { elapsed, lapArray } = this.state;
        console.log("State before lap: ", this.state)
        this.setState({
            lapArray: [...lapArray, elapsed]
        },()=>{console.log("State after lap: ", this.state)});
    }
    render() {
        const { elapsed, status, lapArray } = this.state;
        return (
            <div className="jumbotron">
                <h1 className="display-3"><Time elapsed={elapsed} /></h1>
                <hr className="my-3" />
                <p className="lead text-center">{status}</p>
                <p className="text-center">
                    <button onClick={this.start} className="btn btn-outline-success mx-3">Start</button>
                    <button onClick={this.stop} className="btn btn-outline-danger mx-3">Stop</button>
                    <button onClick={this.reset} className="btn btn-outline-warning mx-3">Reset</button>
                    <button onClick={this.lap} className="btn btn-outline-primary mx-3">Lap</button>
                </p>
                <Lap lapTimes={lapArray} />
            </div>
        )
    };
}

export default Stopwatch;