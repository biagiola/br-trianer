  
import React, { Component } from 'react';
import TopNavbar from './Settings';
import Numbers from './Numbers';
import Form from './Form';
import { ThemeContext } from '../../contexts/ThemeContext';

class mathProgram extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (         
            <div 
                className="wrapper " 
                style={{ background: theme.bg }}>
            <TopNavbar/>    
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
        );
    }
}

export default mathProgram;