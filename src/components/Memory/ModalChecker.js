import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { /*toggleModal*/ } from '../../actions/mathActions';

class ModalChecker extends Component {
    constructor(props) {
        super(props);
        
        //Modal references
        
        // functions bindings
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal = () => {
        //this.props.toggleModal();
    }

    render() {
        const numbers = this.props.numbers.map((number) =>
            <span className="digit " key={Math.random()}>{number}</span>
        );  

        const show = this.props.modalDisplay ? 'inline-block' : 'none';

        return (
            <div className="modal2" style={{ display: show  }}>
                <div className="modal2-content">
                    <div className="modal2-header">
                        <span className="close2" onClick={ this.closeModal }>&times;</span>
                        <h2>Checker</h2>
                    </div>
                    <div className="model2-body">
                        { numbers  }
                    </div>
                </div>
            </div>
        );
    }
}

ModalChecker.propTypes = {
    numbers: PropTypes.array,
}; 

const mapStateToProps = state => ({
    numbers: state.math.randoms,
    modalDisplay: state.math.modal
});

const mapDispatchToProps = dispatch => {
    return {
        //toggleModal: () => dispatch(toggleModal()) , 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalChecker);

