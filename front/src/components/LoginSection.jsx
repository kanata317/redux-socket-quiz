import React, {Component, PropTypes} from 'react';
import {TextField, RaisedButton} from 'material-ui';

class LoginSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    login() {
        this.props.actions.login(this.props.inputValue.id, this.props.inputValue.pass);
    }

    inputID(e) {
        if (e) {
            this.props.actions.inputID(e.target.value);
        }
    }
    inputPass(e) {
        if (e) {
            this.props.actions.inputPass(e.target.value);
        }

    }

    render() {
        return (
            <section>
                <div>
                    <TextField floatingLabelText="ID" value={this.props.inputValue.id} onChange={this.inputID.bind(this)}></TextField>
                </div>
                <div>
                    <TextField floatingLabelText="PASS" type="password" value={this.props.inputValue.pass} onChange={this.inputPass.bind(this)}></TextField>
                </div>
                <div>
                    <RaisedButton label="Login" primary={true} onTouchTap={this.login.bind(this)}></RaisedButton>
                </div>
            </section>
        );
    }
}

LoginSection.propTypes = {
    inputValue: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default LoginSection;
