import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import wordPressClient from '../clients/wordPressClient';
import { getEventsFromHTML } from '~/src/utils/EventUtils';

const EVENT_PAGE_ID = 859;

export const getPagesMetadata = createAsyncThunk(
    'getPagesMetadata',
    async () => {
        return wordPressClient.getPagesMetadata();
    },
);

export const getPage = createAsyncThunk('getPage', async (articleId) => {
    return wordPressClient.getPage(articleId);
});

export const getEventsPage = createAsyncThunk('getEventsPage', async () => {
    return wordPressClient.getPage(EVENT_PAGE_ID);
});

const initialState = {
    events: [],
    eventsInitialized: false,
    eventsError: null,
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
        [getEventsPage.pending]: (state) => {
            state.eventsInitialized = false;
            state.eventsError = null;
        },
        [getEventsPage.fulfilled]: (state, action) => {
            state.eventsInitialized = true;
            state.events = getEventsFromHTML(action.payload.content.rendered);
        },
        [getEventsPage.rejected]: (state, action) => {
            state.eventsInitialized = true;
            state.eventsError = action.payload;
        },
    },
});

export default pageSlice;
