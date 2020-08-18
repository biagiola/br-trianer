import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() {
        const { toggleTheme } = this.context
        return (
            <div>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" onClick={ toggleTheme }></span>
                </label>
            </div>
            
        );
    }
}

export default ThemeToggle
