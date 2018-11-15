import React, { Component } from 'react';

import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import Tooltip from '@material-ui/core/Tooltip';

import './Dots.css';

class Dot extends Component {
    constructor() {
        super();

        this.colorMap = {};
        this.colors = {
            black: grey[900],
            red: red[400],
            orange: orange[400],
            green: green[400]
        }
        this.defaultColor = this.colors.black;
    }

    render() {
        const bColor = this.colorMap[this.props.value] || this.defaultColor;
        return (
            <Tooltip title={(this.props.value || 'N/A').replace(/\b\w/, c => c.toUpperCase())}>
                <div className='dot' style={{backgroundColor:bColor}}></div>
            </Tooltip>
        );
    }
}

class DispoDot extends Dot {
    constructor() {
        super();

        this.colorMap = {
            'non communiquée': this.colors.red,
            'statistiques seulement': this.colors.orange,
            'base accessible': this.colors.green
        }
    }
}

class GranuDot extends Dot {
    constructor() {
        super();

        this.colorMap = {
            'nationale': this.colors.red,
            'départementale': this.colors.orange,
            'locale': this.colors.green
        }
    }
}

class TempoDot extends Dot {
    constructor() {
        super();

        this.colorMap = {
            'annuelle': this.colors.red,
            'mensuelle': this.colors.orange,
            'quotidien': this.colors.green
        };
    }
}

class Dots extends Component {
    render() {
        return (
            <div>
                <DispoDot value={this.props.dispo} />
                <GranuDot value={this.props.granu} />
                <TempoDot value={this.props.tempo} />
            </div>
        );
    }
}

export default Dots