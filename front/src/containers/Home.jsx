import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {Paper, Menu, MenuItem} from 'material-ui';
import Group from 'material-ui/svg-icons/social/group';
class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <article>
                <h2>HOME</h2>
                <Paper>
                    <Menu>
                        <MenuItem primaryText="Room" leftIcon={<Group/>} onTouchTap={() => browserHistory.push('room')}/>
                        <MenuItem primaryText="Quiz" leftIcon={<Group/>} onTouchTap={() => browserHistory.push('quiz')}/>
                    </Menu>
                </Paper>
            </article >
        );
    }
}

export default Home;
