import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import wordPressClient from '../clients/wordPressClient';

export const getPagesMetadata = createAsyncThunk(
    'getPagesMetadata',
    async () => {
        return wordPressClient.getPagesMetadata();
    },
);

const initialState = {
    pagesMetadata: [],
    pagesMetadataInitialzed: false,
    pagesMetadataError: null,
    pages: {},
};

const pageSlice = createSlice({
    name: 'pages',
    initialState,
    extraReducers: {
        [getPagesMetadata.pending]: (state) => {
            state.pagesMetadataInitialzed = false;
        },
        [getPagesMetadata.fulfilled]: (state, action) => {
            state.pagesMetadataInitialzed = true;
            state.pagesMetadata = action.payload;
        },
        [getPagesMetadata.rejected]: (state, action) => {
            state.pagesMetadataInitialzed = true;
            state.pagesMetadataError = action.payload;
        },
    },
});

export default pageSlice;
