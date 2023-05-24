import { createStore, combineReducers, } from 'redux';
// יבוא כל הרדוסרס
import pupil from './reducers/pupil';
import classNum from './reducers/class'
import techer from './reducers/teacher'

const reducer = combineReducers({ pupil, classNum, techer });

const store = createStore(reducer);
window.store = store;
export default store;
