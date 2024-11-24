import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
    firstName: '',
    lastName: '',
    userId: -1,
};



export const User = createSlice({
    name: 'User',
    initialState: initialUserState,
    reducers: {
        updateUserName: (state, { payload }) => {
            state.firstName = payload.firstName;
        },
    },
});

export const { updateUserName } = User.actions;

export default User.reducer;
