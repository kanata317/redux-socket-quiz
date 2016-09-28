import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import mui from 'material-ui';
import GetMuiTheme from 'material-ui/styles/getMuiTheme';
import MyRawTheme from '../material_ui_raw_theme_file';
import QuizSection from '../components/QuizSection';
import * as Actions from '../actions/actions';

class Quiz extends Component {
    constructor(props, context) {
        super(props, context);
    }

    static get childContextTypes() {
        return {muiTheme: React.PropTypes.object};
    }

    getChildContext() {
        return {muiTheme: GetMuiTheme(MyRawTheme)};
    }

    render() {
        const {values, actions} = this.props;

        return (
            <div>
                <QuizSection values={values} actions={actions}/>
            </div>
        );
    }
}

Quiz.propTypes = {
    values: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps({quiz}) {
    return {values: quiz};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
