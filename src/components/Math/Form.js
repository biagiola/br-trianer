import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInputValue, generateNum, changeBtnMath, matchResult, toggleModalMath, mathResultOperation } from '../../actions/mathActions';
import { ThemeContext } from '../../contexts/ThemeContext';
import PropTypes from 'prop-types';
import ModalChecker from './ModalChecker';

class Form extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
        this.state = {
            inputValue: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.generateFunct = this.generateFunct.bind(this);
        this.checkFunct = this.checkFunct.bind(this);
        this.openModalFunct = this.openModalFunct.bind(this);

        this.inputValue = React.createRef();
    }

    generateFunct = (e) => {
        e.preventDefault();

        this.inputValue.current.value = ''; // erease the input value of the old input
        this.props.matchResult('initial'); // erease the colour green or red of the button
        this.props.changeBtnMath('generate');

        this.props.generateNum(this.props.min, this.props.max); 
        this.inputValue.current.focus();

    }

    checkFunct = (e) => {       
        e.preventDefault();
        
        this.props.changeBtnMath('next');
        //console.log(this.props.randomNum1, this.props.randomNum2);

        let result;
        switch(this.props.signo) {
            case '+':
                result = this.props.randomNum1 + this.props.randomNum2;
                break
            case '-':
                result = this.props.randomNum1 - this.props.randomNum2;
                break
            case '*':
                result = this.props.randomNum1 * this.props.randomNum2;
                break
            default:
                console.log('default');
            break
        }
        
        let boolResult;
        if (result === parseInt(this.state.inputValue) ) {
            document.getElementById("correct-audio").play();
            this.props.matchResult('right');
            boolResult = 1;
        } else {
            document.getElementById("incorrect-audio").play();
            this.props.matchResult('wrong');
            boolResult = 0;
        }
        
        // we sent the result to the store and use it later in the modal checker
        this.props.mathResultOperation(result);
        console.log("result: ", result);  
        console.log("this.state.inputValue: ", this.state.inputValue);  

        const resultado = {
            result: boolResult
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e.target.value);
    }

    openModalFunct = () => {
        this.props.toggleModalMath();
    }
    
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        const btnStyle = isLightTheme ? 'btnLight' : 'btnDark'
        return (
            <div>
                <form className="box" onSubmit={ this.props.generateBtnMath ? this.generateFunct : this.checkFunct } style={{ backgroundColor: this.props.colourBox }}>
                    <input type="number" id="inputValue" className="inputMath" ref={ this.inputValue } onChange={ this.handleChange } autoComplete="off" autoFocus={true}/>
                    <br></br>
                    <button className={ btnStyle } >{ this.props.generateBtnMath ? "Generate" : "Check" }</button>
                    <button className={ btnStyle } onClick={ this.openModalFunct }>Result</button>    
                </form>
                <ModalChecker/>
            </div>
        )   
    }   
}

Form.propTypes = {
    // data to generate random
    min: PropTypes.number,
    max: PropTypes.number,
    // numbers to manipulate
    randomNum1: PropTypes.number,
    randomNum2: PropTypes.number,
    signo: PropTypes.string,
    // funtions
    changeBtnMath: PropTypes.func, 
    generateNum: PropTypes.func,
    toggleModalMath: PropTypes.func,
    // buttons status
    generateBtnMath: PropTypes.bool,
    nextBtnMath: PropTypes.bool,
    colourBox: PropTypes.string
};

const mapStateToProps = state => ({
    min: state.math.minimo,
    max: state.math.maximo,
    randomNum1: state.math.numerito1,
    randomNum2: state.math.numerito2,
    signo: state.math.sign,
    generateBtnMath: state.math.generateBtnMath, // set the styles button according to the stage of the program
    nextBtnMath: state.math.nextBtnMath,
    colourBox: state.math.colourBox,
    trainingModoFlag: state.math.trainingModeFlag
})
const mapDispatchToProps = dispatch => {
    return {
        addInputValue: (value) => dispatch(addInputValue(value)), 
        generateNum: (min, max) => dispatch(generateNum(min, max)),
        changeBtnMath: (stage) => dispatch(changeBtnMath(stage)),
        matchResult: (result) => dispatch(matchResult(result)),
        toggleModalMath: () => dispatch(toggleModalMath()),
        mathResultOperation: (result) => dispatch(mathResultOperation(result)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
