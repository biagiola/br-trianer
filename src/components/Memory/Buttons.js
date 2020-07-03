import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { passingRandomNums, changeBtn, toggleModalMemory } from '../../actions/mathActions';

class Buttons extends Component {
    constructor(props) {
        super(props);
        // Buttoms references
        this.generateBtn = React.createRef();
        this.checkBtn = React.createRef();
        this.nextBtn = React.createRef();
        // Functions bindings
        this.generateFunct = this.generateFunct.bind(this);
        this.checkFunct = this.checkFunct.bind(this);
        this.nextFunct = this.nextFunct.bind(this);
        this.openModalFunct = this.openModalFunct.bind(this);
    }

    generateFunct = (e) => {       
        e.preventDefault();
        // hide all the buttons and show that we need 
        this.props.changeBtn('generate'); 
        // generate random numbers
        let random = [];
        for ( var i=0; i<this.props.mountNumbers; i++) {
            random[i] = Math.floor(Math.random()*10 );
        }
        // pass the random numbers to add to the redux store
        this.props.passingRandomNums(random, random.length);
    }

    checkFunct = (e) => {
        e.preventDefault();
        this.props.changeBtn('check');
        /*if (this.props.checkBtnStyle) {
            if(this.props.wrongAudioState) {
                document.getElementById("incorrect-audio").play();
            } else {
                document.getElementById("correct-audio").play();
            }
        }*/
    }

    nextFunct = (e) => {
        // reset the default value of the colour boxes, inputs values and innerHTML of the random numbers
        e.preventDefault();
        this.props.changeBtn('next'); 
    }
    
    openModalFunct = () => {
        this.props.toggleModalMemory();
    }

    render() {
        const showGenerateBtn = this.props.generateBtnStyle ? 'inline-block' : 'none';
        const showCheckBtn = this.props.checkBtnStyle ? 'inline-block' : 'none';
        const showNextBtn = this.props.nextBtnStyle ? 'inline-block' : 'none';
        const { isLightTheme, light, dark } = this.context;
        const btnStyle = isLightTheme ? 'btnLight' : 'btnDark'
        
        return (
            <div className="buttonContent">
                <button ref={ this.generateBtn } className={ btnStyle } onClick={ this.generateFunct }  style={{ display: showGenerateBtn}}  >Generate</button>
                <button ref={ this.checkBtn } className={ btnStyle } onClick={ this.checkFunct }  style={{ display: showCheckBtn}} >Check</button>
                <button ref={ this.nextBtn } className={ btnStyle } onClick={ this.nextFunct } style={{ display: showNextBtn   }} >Next</button>
            </div>            
        )
    }
}

Buttons.propTypes = {
  // buttons
  generateBtnStyle: PropTypes.bool, 
  checkBtnStyle: PropTypes.bool, 
  nextBtnStyle: PropTypes.bool, 
  // numbers  
  mountNumbers: PropTypes.number,
  numbers: PropTypes.array,
  // functions
  passingRandomNums: PropTypes.func,
  changeBtn: PropTypes.func,
  toggleModalMemory: PropTypes.func,
  // booleans
  wrongAudioState: PropTypes.bool

}

const mapStateToProps = state => ({
  // buttons
  generateBtnStyle: state.math.generateBtnStyle, 
  checkBtnStyle: state.math.checkBtnStyle, 
  nextBtnStyle: state.math.nextBtnStyle, 
  // numbers
  mountNumbers: state.math.mountNumbers,
  numbers: state.math.randoms,
  // booleans
  wrongAudioState: state.math.wrongAudioState
})

const mapDispatchToProps = dispatch => {
    return {
        passingRandomNums: ( random, mount ) => dispatch(passingRandomNums( random, mount ) ) ,
        changeBtn: ( stage ) => dispatch(changeBtn( stage ) ) ,
        toggleModalMemory: () => dispatch(toggleModalMemory() ) ,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)

