import { combineReducers } from 'redux';
import courseReducer from './courseReducer.jsx';
import notificationReducer from './notificationReducer.jsx';
import uiReducer from './uiReducer.jsx';


const rootReducer = combineReducers({
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer,
});

export default rootReducer;
