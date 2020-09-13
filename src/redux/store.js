import { configureStore } from '@reduxjs/toolkit';

import pageSlice from './PageSlice';

const store = configureStore({
    reducer: {
        pages: pageSlice.reducer,
    },
});

export default store;
