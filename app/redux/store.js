import { configureStore, combineReducers } from '@reduxjs/toolkit';
import User from './reducers/User';
import { logger } from "redux-logger";


const rootReducer = combineReducers({
    user: User,
});
const store = configureStore({
    reducer: rootReducer,
    middleware: defaultMidleware => {
        return defaultMidleware().concat(logger);
    }
});

export default store;
