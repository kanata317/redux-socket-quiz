import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions';
import RoomSection from '../components/RoomSection';

class Room extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {values, actions} = this.props;
        // return (<RoomSection values={values} actions={actions}/>);
        return (<RoomSection values={values} actions={actions}/>);
    }
}

Room.propTypes = {
    values: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps({room}) {
    return {values: room};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
