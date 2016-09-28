import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import * as QuizStatus from '../constants/QuizStatus';

class QuizSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {actions, values} = this.props;
        let sentence = '';
        switch (values.status) {
            case QuizStatus.WAITTING:
                return (<div>'ちょっと待ってね・・・'</div>);
            case QuizStatus.ANSWERING:
                sentence = values.quizList[values.quizNumber].quizSentence;
                break;
            case QuizStatus.CHECKING:
                sentence = `正解は${values.checkAnswer}じゃ`
                break;
            default:
                <div></div>
        }
        const list =values.quizList[values.quizNumber].choiceList.map(a =>{
            return (
                <ListItem
                    disabled={values.answerId === a.choiceId}
                    onTouchTap={()=> actions.answer(a.choiceId)}
                    key={a.choiceId}
                    primaryText={a.choiceSentence}
                    leftAvatar={
                        <FloatingActionButton>{a.choiceId}</FloatingActionButton>
                    }>
                </ListItem>
            );
        });
        return (
            <div>
                <Paper>
                    <video src='./test.mp4'/>
                </Paper>
                <div>
                    <List>
                        {list}
                    </List>
                </div>
            </div>
        );
    }
}

export default QuizSection;
