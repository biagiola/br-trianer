import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleModalMath } from '../../actions/mathActions';

class ModalChecker extends Component {
    constructor(props) {
        super(props);
        // functions bindings
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal = () => {
        this.props.toggleModalMath();
    }

    render() {

        const show = this.props.modalDisplay ? 'inline-block' : 'none';

        return (
            <div className="modal2" style={{ display: show  }}>
                <div className="modal2-content">
                    <div className="modal2-header">
                        <span className="close2" onClick={ this.closeModal }>&times;</span>
                        <h2>Result</h2>
                    </div>
                    <div className="model2-body">
                        { this.props.result }
                    </div>
                </div>
            </div>
        );
    }
}

ModalChecker.propTypes = {
    result: PropTypes.number,
    modalDisplay: PropTypes.bool,
    toggleModalMath: PropTypes.func
}; 

const mapStateToProps = state => ({
    result: state.math.result,
    modalDisplay: state.math.mathModal
});

const mapDispatchToProps = dispatch => {
    return {
        toggleModalMath: () => dispatch(toggleModalMath()) , 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalChecker);

