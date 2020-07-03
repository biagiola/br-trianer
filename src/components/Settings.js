import React, { Component } from 'react';
import Burger from './Burgers';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leftSidebarVisible: false,
            rightSidebarVisible: false,
        };

        this.toggleLeftSidebar = this.toggleLeftSidebar.bind(this);
        this.toggleRightSidebar = this.toggleRightSidebar.bind(this);

    }

    // toggles the dropdown each time it is called
    toggleLeftSidebar = () => this.setState(state => ({
        leftSidebarVisible: !state.leftSidebarVisible,
    }));
    toggleRightSidebar = () => this.setState(state => ({
        rightSidebarVisible: !state.rightSidebarVisible,
    }));

    render() { 
        return (
            <div>
                {/*  */}
                <Burger 
                    leftOnClick={ this.toggleLeftSidebar } 
                    rightOnClick={ this.toggleRightSidebar }
                />
                <LeftNavbar  show={ this.state.leftSidebarVisible } close={ this.toggleLeftSidebar } />
                <RightNavbar show={ this.state.rightSidebarVisible } close={ this.toggleRightSidebar } />
            </div>
        );
    }
}
 
export default Settings;

