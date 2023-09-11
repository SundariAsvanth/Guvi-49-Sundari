import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import counterSlice2 from "./counterSlice2";
import counterSlice3 from "./counterSlice3";
import counterSlice4 from "./counterSlice4";
import counterSlice5 from "./counterSlice5";

const store=configureStore({
    reducer:{
        counter:counterSlice,
        counter2:counterSlice2,
        counter3:counterSlice3,
        counter4:counterSlice4,
        counter5:counterSlice5,
       }
})

export default store;