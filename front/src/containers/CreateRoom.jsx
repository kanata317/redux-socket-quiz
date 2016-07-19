import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions';
import CreateRoomSection from '../components/CreateRoomSection';

class CreateRoom extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {values, actions} = this.props;
        // return (<CreateRoomSection values={values} actions={actions}/>);
        return (<CreateRoomSection values={values} actions={actions}/>);
    }
}

CreateRoom.propTypes = {
    values: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps({createRoom}) {
    return {values: createRoom};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);
