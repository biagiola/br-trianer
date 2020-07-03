import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';

class Numbers extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.llamado = React.createRef();
  }
    // change the class to make an transition effect
    componentDidUpdate() {
      this.llamado.current.className ="val";
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="val.pre-animation" ref={ this.llamado }>
                <span id="num1" style={{ color: theme.signAndNums }}>{ this.props.num1 }</span>
                <span id="sign" style={{ color: theme.signAndNums }}>{ this.props.signo }</span>
                <span id="num2" style={{ color: theme.signAndNums }}>{ this.props.num2 }</span>
            </div>
        )
    }
}

Numbers.propTypes = {
  num1: PropTypes.number,
  num2: PropTypes.number,
  signo: PropTypes.string,
};

const mapStateToProps = state => ({
  num1: state.math.numerito1,
  num2: state.math.numerito2,
  signo: state.math.sign,
})

export default connect( mapStateToProps, null )(Numbers);
