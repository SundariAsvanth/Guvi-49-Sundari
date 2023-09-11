import {createSlice} from '@reduxjs/toolkit'

export const counterSlice3=createSlice({
    name:'counter3',
    initialState:0,
    reducers:{
        increment3:(state)=>state+1,
        decrement3:(state)=>state-1,
    },
});

export const {increment3,decrement3}=counterSlice3.actions;
export default counterSlice3.reducer