import { createSlice } from "@reduxjs/toolkit";


const rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false,
        protfolioData: null,
        reloadData: false,
    },
    reducers: {
        ShowLoading: (state, action) => {
            state.loading = true;
        },
        HideLoading: (state, action) => {
            state.loading = false;
        },
        SetprotfolioData: (state, action) => {
            state.protfolioData = action.payload;
        },
        ReloadData: (state, action) =>{
            state.reloadData = action.payload
        }
    }

});

export default rootSlice.reducer;
export const {ShowLoading, HideLoading, SetprotfolioData,ReloadData} = rootSlice.actions