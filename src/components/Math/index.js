  
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ThemeContext } from '../../contexts/ThemeContext'

import { toggleModalMath } from '../../actions'

import TopNavbar from '../sidebars'
import Numbers from './Numbers'
import Form from './Form'

class MathProgram extends Component {
    constructor(props) {
        super(props)
    }

    static contextType = ThemeContext

    closeModal = () => {
        if(this.props.modalDisplay) {
            this.props.toggleModalMath()
        }
    }

    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark

        return (         
            <div 
                className="wrapper " 
                onClick={ this.closeModal }
                style={{ background: theme.bg }}>
                    
                <TopNavbar page="math"/>    
                <div 
                    className="container" 
                    style={{ background: theme.container }}>
                    
                    <h1 
                        style={{ color: theme.fonts, background: theme.headers }}>
                    Math game</h1>

                    <Numbers/>
                    <Form/> 
                </div>
            </div>
        )
    }
}

MathProgram.propTypes = {
    toggleModalMath: PropTypes.func
}; 

const mapStateToProps = state => ({
    modalDisplay: state.all.mathModal
})

const mapDispatchToProps = dispatch => {
    return {
        toggleModalMath: () => dispatch(toggleModalMath()), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MathProgram)