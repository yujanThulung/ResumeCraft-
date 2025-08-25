import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showTemplates: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleTemplates: (state) => {
            state.showTemplates = !state.showTemplates;
        },
        openTemplates: (state) => {
            state.showTemplates = true;
        },
        closeTemplates: (state) => {
            state.showTemplates = false;
        },
    },
});

export const { toggleTemplates, openTemplates, closeTemplates } = uiSlice.actions;
export default uiSlice.reducer;
