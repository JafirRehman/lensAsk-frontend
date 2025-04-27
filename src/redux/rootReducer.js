import { combineReducers } from '@reduxjs/toolkit';
import user from './slices/user';
import products from './slices/products';

export const rootReducer = combineReducers({
    user,
    products,
});
