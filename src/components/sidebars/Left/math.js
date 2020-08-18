import React, { Component } from 'react'
import { connect } from 'react-redux'

import { trainingModeBegins } from '../../../actions'
import { ThemeContext } from '../../../contexts/ThemeContext'

class LeftNavbar extends Component {
    static contextType = ThemeContext
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: ''
        }
        
        this.training = React.createRef();
        this.stadistics = React.createRef();
        this.readMore = React.createRef();
    }

    // open modals
    openStadisticsModal = () => {
        this.stadistics = true;
        if(this.stadistics === true ) {
            this.setState({
                modal: !this.state.modal,
                title: 'Stadistics'
            })
        }        
    }

    openTrainingModal = () => {
        this.training = true;
        if(this.training === true ) {
            this.setState({
                modal: !this.state.modal,
                title: 'Training'
            })
        }        
    }
    
    openReadMoreModal = () => {
        this.training = true
        if(this.training === true) {
            this.setState({
                modal: !this.state.modal,
                title: 'Read More'
            })
        }        
    }

    // close moddals
    closeModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    
    testing = () => {
        this.props.trainingModeBegins();
        this.setState({
            modalTrainingStatus: !this.state.modalTrainingStatus
        })
    }

    render() {
        let scope
        if (this.props.show) {
            scope = "250px"
        } else {
            scope = "0px"
        }

        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark

        let modalTraining
        if (this.state.modal) {
            modalTraining = <div className="modal" style={{transition: "0.5s"}} >
                                <div className="modal-content">
                                    <span onClick={ this.closeModal } className="close">&times;</span>
                                    <h1>{ this.state.title }</h1>
                                    <h3>User: </h3>
                                    <button className='btnDark' onClick={ this.testing }>Begin</button>
                                </div>
                            </div>
        } else {
            modalTraining = <div></div>
        }

        return (
            <div 
                id="myLeftSidenav" 
                className="leftSidenav" 
                style={{
                    visibility: "visible", 
                    position: "absolute", 
                    height: "100%", 
                    width: scope }}>
                <h4 
                    className="closebtn" 
                    onClick={ this.props.close }>&times;</h4>
                <h1 
                    style={{ 
                        color: theme.fonts, 
                        background: theme.headers }}>Account</h1>
                <h2 
                    onClick={ this.openStadisticsModal } 
                    ref={ this.stadistics } 
                    style={{ color: theme.signAndNums }}>Stadistics</h2>
                <h2 
                    onClick={ this.openTrainingModal } 
                    ref={ this.training } 
                    style={{ color: theme.signAndNums }}>Training</h2>
                <h2 
                    onClick={ this.openReadMoreModal } 
                    ref={ this.readmore } 
                    style={{ color: theme.signAndNums }}>Read More</h2>
                { modalTraining }
            </div>
        );
    }
}

const mapStateToPros = state => ({
    trainingModoFlag: state.all.trainingModeFlag
})
const mapDispatchToProps = dispatch => {
    return {
        trainingModeBegins: () => dispatch(trainingModeBegins())
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(LeftNavbar)
