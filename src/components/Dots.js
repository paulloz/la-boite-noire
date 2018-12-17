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

        this.colors = [grey[900], red[400], orange[400], green[400]];
        this.color = this.colors[0];

        this.tooltip = 'N/A';
    }

    render() {
        return (
            <Tooltip title={this.tooltip}>
                <div className='dot' style={{backgroundColor:this.color}}></div>
            </Tooltip>
        );
    }
}

class DispoDot extends Dot {
    constructor(props) {
        super();

        switch (props.value) {
            case 'non communiquée': {
                this.color = this.colors[1];
                this.tooltip = 'Base de données non-communiquée';
                break;
            }
            case 'statistiques seulement': {
                this.color = this.colors[2];
                this.tooltip = 'Statistiques seulement';
                break;
            }
            case 'base accessible': {
                this.color = this.colors[3];
                this.tooltip = 'Base de données accessible';
                break;
            }
            default: {
                this.tooltip = 'Aucune base de données connue';
                break;
            }
        }
    }
}

class GranuDot extends Dot {
    constructor(props) {
        super();

        switch (props.value) {
            case 'nationale': {
                this.color = this.colors[1];
                this.tooltip = 'Échelle nationale';
                break;
            }
            case 'départementale': {
                this.color = this.colors[2];
                this.tooltip = 'Échelle départementale';
                break;
            }
            case 'locale': {
                this.color = this.colors[3];
                this.tooltip = 'Échelle locale';
                break;
            }
            default: {
                this.tooltip = 'Aucune précision géographique'
                break;
            }
        }
    }
}

class TempoDot extends Dot {
    constructor(props) {
        super();

        switch (props.value) {
            case 'annuelle': {
                this.color = this.colors[1];
                this.tooltip = 'Mise à jour annuelle';
                break;
            }
            case 'mensuelle': {
                this.color = this.colors[2];
                this.tooltip = 'Mise à jour mensuelle';
                break;
            }
            case 'quotidien': {
                this.color = this.colors[3];
                this.tooltip = 'Mise à jour quotidienne';
                break;
            }
            default: {
                this.tooltip = 'Aucune mise à jour';
                break;
            }
        }
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
export { DispoDot, GranuDot, TempoDot }