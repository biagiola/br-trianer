import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { generateTimerMemory, passingRandomNums, changeBtn } from '../../../actions/mathActions';
import { ThemeContext } from '../../../contexts/ThemeContext';

class RightNavbar extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
        this.state = { 
            digits: null,
            backgroundColor: '',
            time: null,
            mode: ''
        }        
        
        // references
        this.digitsId = React.createRef();
        this.mountBoxes = React.createRef();
        this.timeId = React.createRef();
        this.modeId = React.createRef();

        // bindings
        this.boxesValue = this.boxesValue.bind(this);
        this.timeValue = this.timeValue.bind(this);
        this.modeValue = this.modeValue.bind(this);
    }

    boxesValue = () => {
        console.log('boxesValue(): digitsValue: ', this.mountBoxes.current.value);
        
        let random = [];
        for ( var i=0; i<this.mountBoxes.current.value; i++ ) {
            random[i] = null;
        }
        // pass the random numbers to add to the redux store
        this.props.passingRandomNums(random, random.length);
        this.props.changeBtn('check');
    }
    timeValue = () => {       
        console.log('hola') ;
        console.log(this.timeId.current.value);
        console.log(parseInt(this.timeId.current.value));
        this.props.generateTimerMemory(1200);
    }
    modeValue = () => {
        console.log('modeId', this.modeId.current.value );
        this.setState({
            mode: this.modeId.current.value
        })
    }
    render() {
        var scope;
        if (this.props.show) {
            scope = "250px";
        } else {
            scope = "0px";
        }

        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        const btnStyle = isLightTheme ? 'btnLight' : 'btnDark'
        
        return (
            <div id="myRightSidenav" className="rightSidenav" style={{visibility: "visible", position: "absolute", height: "100%", width: scope, backgroundColor: theme.container}}>

                <h4 className="closebtn" style={{ cursor: "pointer" }}  onClick={ this.props.close }>&times;</h4>
                <h1 style={{ color: theme.fonts, background: theme.headers }}>Settings</h1>
                
                <h4 style={{ color: theme.signAndNums }}>Boxes</h4>
                <select className={ btnStyle } ref={ this.mountBoxes } onInput={ this.boxesValue } defaultValue="4">
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select><br/><br/>

                <h4 style={{ color: theme.signAndNums }}>Speed</h4>
                <select className={ btnStyle } ref={ this.timeId }  onInput={ this.timeValue } defaultValue="1600">
                    <option value="200">0.2</option>
                    <option value="400">0.4</option>
                    <option value="600">0.6</option>
                    <option value="800">0.8</option>
                    <option value="1000">1.0</option>
                    <option value="1200">1.2</option>
                    <option value="1400">1.4</option>
                    <option value="1600">1.6</option>
                    <option value="1800">1.8</option>
                    <option value="2000">2.0</option>
                </select><br/><br/>   

            </div>  
        )
    }
}

RightNavbar.propTypes = {
  generateTimerMemory: PropTypes.func,
  changeBtn: PropTypes.func,
  passingRandomNums: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
    return {
        passingRandomNums: (random, mount) => dispatch(passingRandomNums(random, mount)) ,
        changeBtn: (stage) => dispatch(changeBtn(stage)) ,
        /*generateTimerMemory: (time) => dispatch(generateTimerMemory(time)) , */
    }
}

export default connect(null, mapDispatchToProps)(RightNavbar);
