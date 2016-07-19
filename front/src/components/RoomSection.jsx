import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {
    Dialog,
    FlatButton,
    IconButton,
    List,
    ListItem,
    Subheader,
    TextField
} from 'material-ui';
import GroupAdd from 'material-ui/svg-icons/social/group-add';
import PersonAdd from 'material-ui/svg-icons/social/person-add';

class RoomSection extends Component {
    constructor(props, context) {
        super(props, context)
    }

    openRoomDialog() {
        this.props.actions.openRoomDialog("1");
    }

    componentWillMount() {
        this.props.actions.fetchRooms();
    }

    render() {
        const {values, actions} = this.props;
        return (
            <article>
                <h2>Room</h2>
                <Dialog title="Dialog With Date Picker" actions={[ < FlatButton label = "Ok" primary = {
                        true
                    }
                    onTouchTap = {
                        actions.closeRoomDialog
                    } />, < FlatButton label = "cancel" primary = {
                        true
                    }
                    onTouchTap = {
                        actions.closeRoomDialog
                    } />
                ]} modal={false} open={values.roomDaialog} onRequestClose={actions.closeRoomDialog}>
                    You must input userID to join room;
                    <TextField hintText="userID"/>
                </Dialog>
                <List>
                    <Subheader>
                        <IconButton tooltip="createRoom" onTouchTap={() => browserHistory.push('createRoom')}>
                            <GroupAdd/>
                        </IconButton>

                    </Subheader>
                    <ListItem primaryText="group1" rightIconButton={< IconButton tooltip = "JoinRoom" onTouchTap = {
                        this.openRoomDialog.bind(this)
                    } > <PersonAdd/> < /IconButton>}/>
                </List>
            </article>
        );
    }
}

RoomSection.propTypes = {
    values: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default RoomSection;
