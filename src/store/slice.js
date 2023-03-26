import {createSlice} from  '@reduxjs/toolkit';

const initialState = {
    data:[]
}

export const FETCH_DATA = createSlice({
    name:"fetch",
    initialState,
    reducers:{
        Fetch:(state,action)=>{
            state.data = action.payload

        },

        Error:(state,action)=>{
            state.data  = action.payload

        }
    }
})



export const {Fetch ,Error}  =FETCH_DATA.actions;
export default FETCH_DATA.reducer ;