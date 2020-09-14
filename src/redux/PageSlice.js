import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import wordPressClient from '../clients/wordPressClient';

export const getPagesMetadata = createAsyncThunk(
    'getPagesMetadata',
    async () => {
        return wordPressClient.getPagesMetadata();
    },
);

export const getPage = createAsyncThunk(
    'getPage',
    async (articleId) => {
        return wordPressClient.getPage(articleId);
    },
);

const initialState = {
    pagesMetadata: [],
    pagesMetadataInitialized: false,
    pagesMetadataError: null,
    pages: {},
    pageError: null,
};

const pageSlice = createSlice({
    name: 'pages',
    initialState,
    extraReducers: {
        [getPagesMetadata.pending]: (state) => {
            state.pagesMetadataInitialized = false;
            state.pagesMetadataError = null;
        },
        [getPagesMetadata.fulfilled]: (state, action) => {
            state.pagesMetadataInitialized = true;
            state.pagesMetadata = action.payload;
        },
        [getPagesMetadata.rejected]: (state, action) => {
            state.pagesMetadataInitialized = true;
            state.pagesMetadataError = action.payload;
        },
        [getPage.pending]: (state) => {
            state.pageError = null;
        },
        [getPage.fulfilled]: (state, action) => {
            const { id } = action.payload;
            state.pages[id] = action.payload;
        },
        [getPage.rejected]: (state, action) => {
            state.pageError = action.payload;
        },
    },
});

export default pageSlice;
