import React, { Component } from 'react'

import Burgers from '../Burgers'

import MathLeftNavbar from './Left/math'
import MathRightNavbar from './Right/math'

import MemoryLeftNavbar from './Left/memory'
import MemoryRightNavbar from './Right/memory'

class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftMathSidebar: false,
            rightMathSidebar: false,
            
            leftMemorySidebar: false,
            rightMemorySidebar: false,
        }
    }

    // toggles the dropdown each time it is called
    /* MATH */
    toggleLeftMathSidebar = () => this.setState(state => ({
        leftMathSidebar: !state.leftMathSidebar,
    }))

    toggleRightMathSidebar = () => this.setState(state => ({
        rightMathSidebar: !state.rightMathSidebar,
    }))

    /* MEMORY */
    toggleLeftMemorySidebar = () => this.setState(state => ({
        leftMemorySidebar: !state.leftMemorySidebar,
    }))

    toggleRightMemorySidebar = () => this.setState(state => ({
        rightMemorySidebar: !state.rightMemorySidebar,
    }))

    render() { 
        console.log('sidebar index props', this.props )

        const leftNavbar = this.props.page === 'math'
        ? <MathLeftNavbar
            page={ this.props.page } 
            show={ this.state.leftMathSidebar } 
            close={ this.toggleLeftMathSidebar } />
        : <MemoryLeftNavbar 
            page={ this.props.page } 
            show={ this.state.leftMemorySidebar } 
            close={ this.toggleLeftMemorySidebar } />

        const rightNavbar = this.props.page === 'math' 
        ? <MathRightNavbar
            page={ this.props.page } 
            show={ this.state.rightMathSidebar } 
            close={ this.toggleRightMathSidebar } />
        : 
        <MemoryRightNavbar
            page={ this.props.page } 
            show={ this.state.rightMemorySidebar } 
            close={ this.toggleRightMemorySidebar } />

        return (
            <div>
                <Burgers 
                    rightMathOnClick={ this.toggleRightMathSidebar }
                    leftMathOnClick={ this.toggleLeftMathSidebar } 
                />
                
                { leftNavbar }

                { rightNavbar }
                
            </div>
        )
    }
}
 
export default Settings