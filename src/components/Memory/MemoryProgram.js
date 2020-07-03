import React, { Component } from 'react';
import Settings from './Settings';
import BoxesContent from './BoxesContent';
import Buttons from './Buttons';
import { ThemeContext } from '../../contexts/ThemeContext';
import ModalChecker from './ModalChecker';

class MemoryProgram extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div className="wrapper " style={{ background: theme.bg }}>
                <Settings/>    
                <div className="container" style={{ background: theme.container }}>
                    <h1 id="gameHeader" style={{ color: theme.fonts, background: theme.headers }}>Memory Game</h1>
                    <BoxesContent/>
                    <Buttons/>
                    <ModalChecker/>
                </div>           
            </div>
        );
    }
}

export default MemoryProgram;


