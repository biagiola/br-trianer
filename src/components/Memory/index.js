import React, { Component } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'

import TopNavbar from './Settings'
import BoxesContent from './BoxesContent'
import Buttons from './Buttons'
import ModalChecker from './ModalChecker'

class MemoryProgram extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props)
    }

    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return ( 
            <div 
                className="wrapper " 
                style={{ background: theme.bg }}>
                
                <TopNavbar/>    
                
                <div 
                    className="container" 
                    style={{ background: theme.container }}>
                    
                    <h1 
                        id="gameHeader" 
                        style={{ color: theme.fonts, background: theme.headers }}>
                    Memory Game</h1>

                    <BoxesContent/>
                    <Buttons/>
                    <ModalChecker/>
                </div>           
            </div>
        );
    }
}

export default MemoryProgram;


