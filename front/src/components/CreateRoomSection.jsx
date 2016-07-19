import React, {Component, PropTypes} from 'react';
import {
    AutoComplete,
    FlatButton,
    MenuItem,
    Paper,
    SelectField,
    TextField
} from 'material-ui';

class CreateRoomSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    changeQuizType(event, index, value) {
        this.props.actions.changeQuizType(value);
    }

    inputRoomName(e) {
        if (e) {
            this.props.actions.inputRoomName(e.target.value);
        }

    }

    render() {
        const {values} = this.props;

        const items = [];

        for (let quizType of values.quizTypes) {
            items.push(<MenuItem primaryText={quizType.quizName} secondaryText={quizType.quizNumber} key={quizType.quizId} value={quizType.quizId}/>);
        }
        return (
            <Paper>
                <TextField floatingLabelText="ROOM_NAME" onChange={this.inputRoomName.bind(this)} value={values.roomName}/>
                <br/>
                <SelectField floatingLabelText="Quiz_Type" onChange={this.changeQuizType.bind(this)} value={values.quizId}>
                    {items}
                </SelectField>
                <br/>
                <FlatButton label="Create" primary={true}/><FlatButton label="Cancel" primary={true}/>
            </Paper>
        );
    }
}

CreateRoomSection.propTypes = {
    values: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default CreateRoomSection;
