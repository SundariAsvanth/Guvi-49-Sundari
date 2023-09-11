import {createSlice} from '@reduxjs/toolkit'

export const counterSlice4=createSlice({
    name:'counter4',
    initialState:0,
    reducers:{
        increment4:(state)=>state+1,
        decrement4:(state)=>state-1,
    },
});

export const {increment4,decrement4}=counterSlice4.actions;
export default counterSlice4.reducer