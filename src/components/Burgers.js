import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ThemeContext } from '../contexts/ThemeContext'
import { clearValuesMath } from '../actions/mathActions'

/* 
Class that shows the burgers and when it has a property
when it must to slide it when we click it.
*/
class Burgers extends Component {
    static contextType = ThemeContext
    constructor(props){
        super(props)
    }

    clearNumbers = () => {
        this.props.clearValuesMath()
    }

    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? dark : light

        console.log('Burgers ',this.props.page)

        // Burger left
        const burgerLeft = this.props.page === 'math' 
        ? <div  
            className="burgerLeft" 
            onClick={ this.props.leftMathOnClick } 
            style={{ position: "", color: theme.burgersFonts }} 
            data-toggle="collapse" 
            data-target="#collapsingNavbar">&#9776;</div>
        :
        <div  
            className="burgerLeft" 
            onClick={ this.props.leftMemoryOnClick } 
            style={{ position: "", color: theme.burgersFonts }}  
            data-toggle="collapse" 
            data-target="#collapsingNavbar">&#9776;</div>

        // Burger right
        const burgerRight = this.props.page === 'math' 
        ? <div  
            className="burgerRight" 
            onClick={ this.props.rightMathOnClick } 
            style={{ position: "", color: theme.burgersFonts }} 
            data-toggle="collapse" 
            data-target="#collapsingNavbar">&#9776;</div>
        :
        <div  
            className="burgerRight" 
            onClick={ this.props.rightMemoryOnClick } 
            style={{ position: "", color: theme.burgersFonts }}  
            data-toggle="collapse" 
            data-target="#collapsingNavbar">&#9776;</div>

        return (
            <div id="burger">
                { burgerLeft }
                
                <Link 
                    to={ './' } 
                    id="backSign" >
                    <i 
                        className="fa fa-chevron-circle-left" 
                        onClick={ this.clearNumbers }  
                        style={{ color: theme.burgersFonts }}></i>
                </Link>
                
                { burgerRight }
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

export default connect(null, mapDispatchToProps)(Burgers)
