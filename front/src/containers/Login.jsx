import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions';
import LoginSection from '../components/LoginSection';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {values, actions} = this.props;
        return (<LoginSection values={values} actions={actions}/>);
    }
}

Login.propTypes = {
    values: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps({login}) {
    console.log(login);
    return {values: login};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
