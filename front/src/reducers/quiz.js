import * as actionsTypes from '../constants/ActionTypes';
import * as QuizStatus from '../constants/QuizStatus';
const initialState = {
    quizList: [
        {
            quizSentence: './test.mp4',
            choiceList: [
                {choiceId:'1', choiceSentence: 'mos1'},
                {choiceId:'2', choiceSentence: 'mos2'},
                {choiceId:'3', choiceSentence: 'mos3'},
                {choiceId:'4', choiceSentence: 'mos4'}
            ]
        },
        {
            quizSentence: '/Users/kanata/Downloads/discoverypartIIjonathanmitchellmp4-CvEVzRtq/discoverypartIIjonathanmitchellmp4.mp4',
            choiceList: [
                {choiceId:'1', choiceSentence: 'mos1'},
                {choiceId:'2', choiceSentence: 'mos2'},
                {choiceId:'3', choiceSentence: 'mos3'},
                {choiceId:'4', choiceSentence: 'mos4'}
            ]
        }
    ],
    quizNumber: 0,
    answerId: '',
    status:QuizStatus.ANSWERING,
    checkAnswer: ''
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.ANSWER:
            return Object.assign({}, state, {answerId: action.answerId});
        case actionsTypes.NEXT_QUIZ:
            return Object.assign({}, state, {
                status: QuizStatus.ANSWERING,
                quizNumber: state.quizNumber,
                answerId: ''});
        case actionsTypes.WAIT:
            return Object.assign({}, state, {status: QuizStatus.WAITTING});
        case actionsTypes.CHECK_ANSWER:
            return Object.assign({}, state, {status: QuizStatus.CHECKING,checkAnswer: action.checkAnswer});
        default:
            return state;
    }
}
