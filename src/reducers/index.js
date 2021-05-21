import Modifier from './Modifier';
import Login from './Login';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    Modifier:Modifier,
    Login:Login
});

export default allReducers;