import {createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
    name:"user",
    initialState:{
        isFetching: false,
        error: false,
        isSuccess:false
    },
    reducers:{
        fetchStart: (state) => {
            state.isFetching = true;
        },
        fetchSuccess: (state) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.error = false;
        },
        fetchFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const {fetchStart,fetchSuccess, fetchFailure} =fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;