import { configureStore, combineReducers } from '@reduxjs/toolkit';
import User from './reducers/User';
import { logger } from "redux-logger";
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import Categories from './reducers/Categories';


const rootReducer = combineReducers({
    user: User,
    categories: Categories,
});
const config = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
};
const persisterReducer = persistReducer(config, rootReducer);
const store = configureStore({
    reducer: persisterReducer,
    middleware: defaultMidleware => {
        return defaultMidleware({ serializableCheck: false }).concat(logger);
    }
});

export default store;

export const persistor = persistStore(store);
