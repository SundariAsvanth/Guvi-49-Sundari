import {createSlice} from '@reduxjs/toolkit'

export const counterSlice2=createSlice({
    name:'counter2',
    initialState:0,
    reducers:{
        increment2:(state)=>state+1,
        decrement2:(state)=>state-1,
    },
});

export const {increment2,decrement2}=counterSlice2.actions;
export default counterSlice2.reducer