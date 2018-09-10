import React, { Component } from 'react';

class FormatTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
<<<<<<< HEAD
            ms: 0
        }
=======
            ms: 0,
        };
>>>>>>> ab00b9c453e072c0e45a1f238c988339563fa2f9
        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '383px'
<<<<<<< HEAD
        }
    }
    leadingZero(number) {
        if (number < 10) {
            return "0" + number;
        } else if (number >= 10) {
            return number;
        }
    }
    trailingZero(number) {
        if (number < 10) {
            return number + "0";
        } else if (number >= 10) {
            return number;
        }
    }
=======
        };
    };
>>>>>>> ab00b9c453e072c0e45a1f238c988339563fa2f9
    componentWillReceiveProps(nextProps) {
        const { elapsed } = nextProps;
        const sec = elapsed / 1000;
        const min = sec / 60;
        this.setState({
            hour: Math.floor(min / 60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        });
<<<<<<< HEAD
=======
    };
    leadingZero(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        };
    };
    trailingZero(number) {
        if (number < 10) {
            return number + "0";
        } else {
            return number;
        }
>>>>>>> ab00b9c453e072c0e45a1f238c988339563fa2f9
    }
    render() {
        const { hour, min, sec, ms } = this.state;
        return (
<<<<<<< HEAD
            <div style={this.timerStyle}>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}</div>
        )
    };
};
=======
            <div style={this.timerStyle}>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}:{this.trailingZero(ms)}</div>
        );
    };
}
>>>>>>> ab00b9c453e072c0e45a1f238c988339563fa2f9

export default FormatTime;