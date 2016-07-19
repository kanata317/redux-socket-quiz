import loginSaga from './login';
import roomSaga from './room';

export default function * rootSaga() {
    yield fork(loginSaga);
    yield fork(roomSaga);
}
