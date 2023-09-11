import {createSlice} from '@reduxjs/toolkit'

export const counterSlice5=createSlice({
    name:'counter5',
    initialState:0,
    reducers:{
        increment5:(state)=>state+1,
        decrement5:(state)=>state-1,
    },
});

export const {increment5,decrement5}=counterSlice5.actions;
export default counterSlice5.reducer