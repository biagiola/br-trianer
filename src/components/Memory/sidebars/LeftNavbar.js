import React, { Component } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

class LeftNavbar extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.modalId = React.createRef();
    }

    openModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        var scope;
        if (this.props.show) {
            scope = "250px";
        } else {
            scope = "0px"
        }

        var modalDiv;
        if (this.state.modalOpen) {
            modalDiv = <div className="modal" >
                            <div className="modal-content">
                                <span onClick={ this.closeModal } className="close">&times;</span>
                                <h1>Stadistics</h1>
                                <h3>User: </h3>
                            </div>
                        </div>
        } else {
            modalDiv = <div></div>
        }

        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div id="myLeftSidenav" className="leftSidenav" style={{visibility: "visible", position: "absolute", height: "100%", width: scope, backgroundColor: theme.container}}>

                <h4 className="closebtn" style={{ cursor: "pointer" }}  onClick={ this.props.close }>&times;</h4>
                <h1 style={{ color: theme.fonts, background: theme.headers }}>Account</h1>
                <h2 onClick={ this.openModal } style={{ color: theme.signAndNums }}>Stadistics</h2>
                { modalDiv }
                
                <h2 /* onclick="trainingFuct()" */ style={{ color: theme.signAndNums }}>Training</h2>
                
                <h2 style={{ color: theme.signAndNums }}>Read More</h2>

            </div>
        );
    }
}

export default LeftNavbar;