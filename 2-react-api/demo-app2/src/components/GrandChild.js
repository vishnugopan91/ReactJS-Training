import React, { Component } from 'react';
import PropTypes from 'prop-types'

class GrandChild extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                &#8377;{this.context.bankBalance}
            </div>
        );
    }
}

GrandChild.contextTypes = {
    bankBalance: PropTypes.number
};

export default GrandChild;