import {handleActions} from 'redux-actions';
import {userNameAction} from "./userAction";

const defaultState = {
    userName: ''
};

export default handleActions({
    [userNameAction]: (state) => {
        return {
            ...state,
            userName: 'Vasilij',
        }
    }
}, defaultState)
