import React, { Component } from 'react';

class Lap extends Component {
    constructor(props) {
        super(props);
        this.formatTime = this.formatTime.bind(this);
    }
    formatTime(lapTime) {
        const totalSec = lapTime / 1000;
        const totalMin = totalSec / 60;
        const hour = Math.floor(totalMin / 60);
        const min = Math.floor(totalMin % 60);
        const sec = Math.floor(totalSec % 60);
        const ms = Math.floor(lapTime % 100);
        return hour + ":" + min + ":" + sec + "." + ms;
    }
    render() {
        const { lapTimes } = this.props;
        const lapRow = lapTimes.map((item, index) => {
            return (
                <tr key={index}>
                    <td className="text-center">{this.formatTime(item)}</td>
                </tr>
            )
        });
        return (
            <div>
                <table className="table">
                    <thead className="thead-inverse">
                        <tr>
                            <th className="text-center">Lap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lapRow}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Lap;
