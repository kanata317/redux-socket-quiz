import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/LoginSection';
import * as TodoActions from '../actions/todos';

class App extends Component {
    render() {
        const {inputValue, actions} = this.props;
        return (
            <div>
                <MainSection inputValue={inputValue} actions={actions}/>
            </div>
        );
    }
}

App.propTypes = {
    inputValue: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {inputValue: state.login};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
