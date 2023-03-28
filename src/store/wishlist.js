import {createSlice} from  '@reduxjs/toolkit';

const initialState = {
    wishlist:[]
}


export const FETCH_wish = createSlice({
    name:"wishList",
    initialState,
    reducers:{
        wish:(state,action)=>{
            state.wishlist.push(action.payload)

        },

        delete :(state,action)=>{
            state.data  = action.payload

        }
    }
})



export const {wish}  =FETCH_wish.actions;
export default FETCH_wish.reducer ;