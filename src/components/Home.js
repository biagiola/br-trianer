import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

class Home extends Component {

    static contextType = ThemeContext

    render() { 
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        const btnStyle = isLightTheme ? 'btnLight' : 'btnDark'

        return (
            <div 
                className="wrapper " 
                style={{ background: theme.bg }}>
                
                <ThemeToggle/>
                <div 
                    className="container" 
                    style={{ background: theme.container, boxShadow: theme.shadow }}>
                    
                    <h1 
                        style={{ color: theme.fonts, background: theme.headers }}
                    >Brain Game</h1>

                    <Link to='/math' className={btnStyle}>Math</Link>
                    <Link to='/memory'  className={btnStyle}>Memory</Link>
                </div>
            </div>
        )
    }
}

export default Home