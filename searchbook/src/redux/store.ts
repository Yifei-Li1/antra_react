import { createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import searchlistBookSlice from './slices/searchlistBookSlice';
import wishlistBooksSlice from './slices/wishlistBooksSlice';
//action

export const store = configureStore({
    reducer:{
        searchlistBookSlice,
        wishlistBooksSlice 
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch