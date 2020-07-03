import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trainingModeBegins } from '../../../actions/mathActions';
import { ThemeContext } from '../../../contexts/ThemeContext';

class LeftNavbar extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
        this.state = {
            modalTrainingStatus: false
        }
        this.testing = this.testing.bind(this);
    }

    openModal = () => {
        this.setState({
            modalTrainingStatus: !this.state.modalTrainingStatus
        })
    }

    closeModal = () => {
        this.setState({
            modalTrainingStatus: !this.state.modalTrainingStatus
        })
    }

    testing = () => {
        console.log('probando');
        this.props.trainingModeBegins();
        this.setState({
            modalTrainingStatus: !this.state.modalTrainingStatus
        })
    }

    render() {
        let scope;
        if (this.props.show) {
            scope = "250px";
        } else {
            scope = "0px"
        }

        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        let modalTraining;
        if (this.state.modalTrainingStatus) {
            modalTraining = <div className="modal" style={{transition: "0.5s"}} >
                                <div className="modal-content" style={{transition: "0.5s"}}>
                                    <span onClick={ this.closeModal } className="close">&times;</span>
                                    <h1>Training Mode</h1>
                                    <h3>User: </h3>
                                    <button className='btnDark' onClick={ this.testing }>Begin</button>
                                </div>
                            </div>
        } else {
            modalTraining = <div></div>
        }

        return (
            <div id="myLeftSidenav" className="leftSidenav" style={{visibility: "visible", position: "absolute", height: "100%", width: scope, backgroundColor: theme.container }}>
                
                <h4 className="closebtn" onClick={ this.props.close }>&times;</h4>
                <h1 style={{ color: theme.fonts, background: theme.headers }}>Account</h1>

                    <h2 style={{ color: theme.signAndNums }}>Stadistics</h2>
                    <h2 onClick={ this.openModal } style={{ color: theme.signAndNums }}>Training</h2>
                    <h2 style={{ color: theme.signAndNums }}>Read More</h2>
                    { modalTraining }
                    
            </div>
        );
    }
}

const mapStateToPros = state => ({
    trainingModoFlag: state.math.trainingModeFlag
})
const mapDispatchToProps = dispatch => {
    return {
        trainingModeBegins: () => dispatch(trainingModeBegins())
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(LeftNavbar);