import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { playWrongAudio } from '../../actions/mathActions';

class BoxesContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beginProgram: false,
            showInputTags: false,
            inputValues: [],
        }
        this.inputValues = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    // we receive new props from redux so we change state to show <input/>  insted the <span/> where are the numbers.
    UNSAFE_componentWillReceiveProps( nextProps ) {
        if ( nextProps !== this.props ) {
            this.setState({
                showInputTags: !this.state.showInputTags,
            })
        }
    }

    // we ask if there's changed props (when we receive) and state (when we modify what render into the dom... span or input tags).
    shouldComponentUpdate( nextProps, nextState ) {
        //console.log('shouldComponentUpdate', this.props.generateBtnStyle, this.props.checkBtnStyle, this.props.nextBtnStyle );
        if ( nextProps !== this.props || nextState.showInputTags !== this.state.showInputTags ) {
            return true
        }
        return false
    } 

    // then we hide in <span/> with the generated random numbers and show <input/> according to the showInputsTags.
    UNSAFE_componentWillUpdate( nextProps, nextState ) {
        console.log('componentWillUpdate', this.props.generateBtnStyle, this.props.checkBtnStyle, this.props.nextBtnStyle );
        if( !this.state.showInputTags ) {  
            console.log('important if 02');
            // after insert the numbers in the <input/> fields we want to show it untill the next stage call 'next'.     
            if ( nextProps.nextBtnStyle ) {
                return;
            }                   
            // show the <span/> by default just few seconds and then desapear 
            this.myTimer = setTimeout( () => { this.setState({
                showInputTags: !this.state.showInputTags,
            })}, this.props.time); 
        } 
        
        // we empty the inputValues before the next lifecycle method to charge it new values again.
        this.setState({
            inputValues: []
        })
    }

    componentDidUpdate() {
        console.log(this.state.inputValues, this.props.numbers, 'didUpdate');
        this.props.playWrongAudio(true);

        // test if all the inputs all right
        let newFlag = false;
        for (let i = 0; i < this.props.numbers.length; i++) {
            const element = this.props.numbers[i];
            if( element !== parseInt(this.state.inputValues[i]) && this.state.inputValues.length > 0) {
                newFlag = true;
            }
        }
        if(this.props.generateBtnStyle){
            if( !newFlag ) {
                document.getElementById("correct-audio").play();
            } 
        }
    }

    // we save the inputs the user enters while the execution to compare later with the randoms numbers recive from the redux store.
    handleChange = e => {
        let arrays = [...this.state.inputValues, e.target.value]; // we spread the old values and added the new enters.
        // and just then we call the setState.
        this.setState({
            inputValues: arrays
        });
    }

    render() {
        // generate spans to contain the random numbers.
        const spanBoxes = this.props.numbers.map( number =>
            <span className="digit " key={Math.random()} style={{ }}>{number}</span>
        ); 
        // generate (empty) input boxes to enter the numbers.
        const inputBoxes = this.props.numbers.map(() =>                
            <input className="digit " key={Math.random()} style={{ }} ref={ this.inputValues } onChange={ this.handleChange }  maxLength="1"/>
        ); 

        // if the correct button is pressed and all the inputs all filled.
        if (this.props.nextBtnStyle) {
            // cycle for recongnize the right, wrong or empty boxes.
            for(let i = 0; i < this.props.mountNumbers; i++) {
                console.log('props.numbers ', this.props.numbers[i], 'state.inputValues ',this.state.inputValues[i]);
                // right
                if ( this.props.numbers[i] === parseInt(this.state.inputValues[i]) ) {
                    inputBoxes[i].props.style.backgroundColor = "green";
                    spanBoxes[i].props.style.backgroundColor = "green";
                // wrong
                } if( this.props.numbers[i] !== parseInt(this.state.inputValues[i]) && this.props.numbers[i] !== null ) {
                    inputBoxes[i].props.style.backgroundColor = "red";
                    spanBoxes[i].props.style.backgroundColor = "red";
                } 
                // set the initial colours                    
                if ( this.props.numbers[i] === null ) {
                    inputBoxes[i].props.style.backgroundColor = "salmon";
                    spanBoxes[i].props.style.backgroundColor = "salmon";
                }
            } 
        }
        // return the initials colours to the span and input tags
        if (this.props.generateBtnStyle) {
            for(let i=0; i<this.props.mountNumbers; i++ ) {
                console.log('generate true');
                inputBoxes[i].props.style.backgroundColor = "salmon";
                spanBoxes[i].props.style.backgroundColor = "salmon"
            }
        }
        
        return (            
            <form onSubmit={ this.handleChange }>
                <div className="wrapperNumbers" >
                    { this.state.showInputTags ? spanBoxes : inputBoxes }
                </div>
            </form>
        )
    }
}

BoxesContent.propTypes = {
    // functions
    playWrongAudio: PropTypes.func,
    // numbers
    numbers: PropTypes.array,
    time: PropTypes.number,
    mountNumbers: PropTypes.number,
    // buttons
    generateBtnStyle: PropTypes.bool,
    checkBtnStyle: PropTypes.bool,
    nextBtnStyle: PropTypes.bool,
}

const mapStateToProps = state => ({
    // variables
    numbers: state.math.randoms,
    time: state.math.timerMemory,
    mountNumbers: state.math.mountNumbers,
    // buttons
    generateBtnStyle: state.math.generateBtnStyle,
    checkBtnStyle: state.math.checkBtnStyle,
    nextBtnStyle: state.math.nextBtnStyle,
})

const mapDispatchToProps = dispatch => {
    return {
        playWrongAudio: () => dispatch(playWrongAudio() ) ,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxesContent);
