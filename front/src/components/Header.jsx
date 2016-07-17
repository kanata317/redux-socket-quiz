import React, {PropTypes, Component} from 'react';
import {browserHistory} from 'react-router';
import {AppBar, FlatButton} from 'material-ui';

const defaultStyle = {
    marginLeft: 20
};

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <header>
                <AppBar title={< h1 > Quiz < /h1>} iconElementRight={< FlatButton label = "Login" onTouchTap = {
                    () => browserHistory.push('login')
                } />}/>
            </header>
        );
    }
}

export default Header;
