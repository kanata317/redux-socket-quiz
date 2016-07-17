import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {Paper, Menu, MenuItem} from 'material-ui';

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
                        <MenuItem primaryText="joinQuiz" onItemTouchTap={() => browserHistory.push('/joinQuiz')}/>
                    </Menu>
                </Paper>
            </article >
        );
    }
}

export default Home;
