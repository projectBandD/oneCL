import { createStore, combineReducers, } from 'redux';
import user from './reducers/user';
import message from './reducers/message';
import ticketLAndF from './reducers/ticketLAndF';


const reducer = combineReducers({user,message,ticketLAndF});

const store = createStore(reducer);
window.store = store;
export default store;