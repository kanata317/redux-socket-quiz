import React, {Component, PropTypes} from "react";
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import Header from '../components/Header';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props);
    }

    render() {
        return (
            <div>
                <Header/> {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

// function mapStateToProps(state, ownProps) {
//     return {values: ownProps};
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(Actions, dispatch)
//     };
// }

export default App;
