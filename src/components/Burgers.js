import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/ThemeContext';
import { clearValuesMath } from '../actions/mathActions';

class Burgers extends Component {
    static contextType = ThemeContext;
    constructor(props){
        super(props);
        this.clearNumbers = this.clearNumbers.bind(this);
    }

    clearNumbers = () => {
        this.props.clearValuesMath();
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? dark : light;
        return (
            <div id="burger">
                <div  className="burgerRight" onClick={ this.props.rightOnClick } style={{ position: "", color: theme.burgersFonts }}  data-toggle="collapse" data-target="#collapsingNavbar">&#9776;</div>
                <Link to={ './' } id="backSign" >
                    <i className="fa fa-chevron-circle-left" onClick={ this.clearNumbers }  style={{ color: theme.burgersFonts }}></i>
                </Link>
                <div  className="burgerLeft" onClick={ this.props.leftOnClick } style={{ position: "", color: theme.burgersFonts }} data-toggle="collapse" data-target="#collapsingNavbar">&#9776;</div>
            </div>
        )
    }
}

Burgers.prototypes = {
    clearValuesMath: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
    return {
        clearValuesMath: () => dispatch(clearValuesMath()),
    }
}

export default connect(null, mapDispatchToProps)(Burgers);
