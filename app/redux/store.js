import { configureStore } from '@reduxjs/toolkit';
import { User } from './reducers/User';


const store = configureStore({
    reducer: {
        key: User,
    },
});

export default store;
