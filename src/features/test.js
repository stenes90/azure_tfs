import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: 'test',
    initialState: {testState: 'initial string'},
    reducers: {
        changeState: (state, action) => {
            state.testState = action.payload
        }
    }
})

export const {changeState} = testSlice.actions;

export default testSlice.reducer;