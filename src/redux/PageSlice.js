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
    pagesMetadataInitialized: false,
    pagesMetadataError: null,
    pages: {},
};

const pageSlice = createSlice({
    name: 'pages',
    initialState,
    extraReducers: {
        [getPagesMetadata.pending]: (state) => {
            state.pagesMetadataInitialized = false;
        },
        [getPagesMetadata.fulfilled]: (state, action) => {
            state.pagesMetadataInitialized = true;
            state.pagesMetadata = action.payload;
        },
        [getPagesMetadata.rejected]: (state, action) => {
            state.pagesMetadataInitialized = true;
            state.pagesMetadataError = action.payload;
        },
    },
});

export default pageSlice;
