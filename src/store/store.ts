import {configureStore} from '@reduxjs/toolkit';
import ticketReducer from './ticketSlice';

export const store = configureStore({
    reducer: {
        tickets: ticketReducer
    }
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store