import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateSign, setMinAndMax, /* generateTimer */ } from '../../../actions/mathActions';
import { ThemeContext } from '../../../contexts/ThemeContext';

class RightNavbar extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
        this.state = { 
            digits: null,
            operation: '',
            backgroundColor: '',
            time: null,
            mode: '',
            quantity: null
        }        
        // references
        this.digitsId = React.createRef();
        this.operationId = React.createRef();
        this.timeId = React.createRef();
        this.modeId = React.createRef();
        this.quantityId = React.createRef();
        // bindings
        this.digitValues = this.digitValues.bind(this);
        this.operationValue = this.operationValue.bind(this);
        this.timeValue = this.timeValue.bind(this);
        this.modeValue = this.modeValue.bind(this);
        this.quantityValue = this.quantityValue.bind(this);
    }

    digitValues = () => {
        console.log("phase");
        let rangeNumbers = this.digitsId.current.value;
        let firstLastNumbers = rangeNumbers.split("-");
        this.props.setMinAndMax(parseInt(firstLastNumbers[0]), parseInt(firstLastNumbers[1])); 
    }
    operationValue = () => {
        this.props.generateSign(this.operationId.current.value)
    }
    timeValue = () => {        
        console.log(this.timeId.current.value);
        this.props.generateTimer(this.timeId.current.value);
    }
    modeValue = () => {
        console.log('modeId', this.modeId.current.value );
        this.setState({
            mode: this.modeId.current.value
        })
    }
    quantityValue = () => {
        console.log('quantityId', this.quantityId.current.value );
        this.setState({
            quantity: this.quantityId.current.value
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
        const btnStyle = isLightTheme ? 'btnLight' : 'btnDark'

        return (
            <div id="myRightSidenav" className="rightSidenav" style={{visibility: "visible", position: "absolute", height: "100%", width: scope, backgroundColor: theme.container }}>
            
                <h4 id="saveBtn" className="closebtn" onClick={ this.props.close }>&times;</h4>
                <h1 style={{ color: theme.fonts, background: theme.headers }}>Settings</h1>
            
                <div className="divsideItems">
                    <h4 style={{ color: theme.signAndNums }}>Digits</h4>
                    <select className={ btnStyle } ref={ this.digitsId } onInput={ () => {this.digitValues()} } style={{ backgroundColor: theme.headers }} defaultValue="10-99">
                        <option value="1-9">1</option>
                        <option value="10-99">2</option>
                        <option value="100-999" >3</option>
                        <option value="1000-9999">4</option>
                        <option value="10000-99999">5</option>
                    </select>

                    <h4 style={{ color: theme.signAndNums }}>Operation</h4>
                    <select className={ btnStyle }  ref={ this.operationId } onChange={ this.operationValue } style={{ backgroundColor: theme.headers }} defaultValue='+' >
                        <option value="+">add</option>
                        <option value="-">sub</option>
                        <option value="*">mult</option>
                        <option value="random">random</option>
                    </select>

                    <h4 style={{ color: theme.signAndNums }}>Speed</h4>
                    <select className={ btnStyle }  ref={ this.timeId } onInput={ this.timeValue } style={{ backgroundColor: theme.headers }}>
                        <option value="">None</option>
                        <option value="1">0.1s</option>
                        <option value="2">0.2s</option>
                        <option value="3">0.3s</option>
                        <option value="4">0.4s</option>
                        <option value="5">0.5s</option>
                    </select>

                    <h4 style={{ color: theme.signAndNums }}>Mode</h4>
                    <select className={ btnStyle }  ref={ this.modeId }  onInput={ this.modeValue }  style={{ backgroundColor: theme.headers }} defaultValue="infinitum">
                        <option value="infinitum" >Infinitum</option>
                        <option value="finitum">finitum</option>
                    </select>

                    <div id="otherOpstions">
                        <h4 style={{ color: theme.signAndNums }}>Quantity</h4>
                        <select className={ btnStyle }  ref={ this.quantityId } onInput={ this.quantityValue } style={{ backgroundColor: theme.headers }}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="70">70</option>
                            <option value="80">80</option>
                            <option value="90">90</option>
                            <option value="10">100</option>
                        </select>
                    </div>  
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        generateSign: (sign) => dispatch(generateSign(sign)),
        setMinAndMax: (min, max) => dispatch(setMinAndMax(min, max)),
        /* generateTimer: (time) => dispatch(generateTimer(time)),  */
    }
}

export default connect(null, mapDispatchToProps)(RightNavbar);