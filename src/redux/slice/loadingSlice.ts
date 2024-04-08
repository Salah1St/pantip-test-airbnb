import { createSlice } from "@reduxjs/toolkit";


const loadingSlice = createSlice({
    name: 'loading',
    initialState: { loadingState: false },
    reducers: {
        loading: (state, action) => {
            state.loadingState =action.payload
        },
    }
})



export default loadingSlice.reducer
const { loading } = loadingSlice.actions;
export { loading }