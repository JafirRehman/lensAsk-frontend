import { combineReducers } from '@reduxjs/toolkit';
import user from './slices/user';

export const rootReducer = combineReducers({
    user,
});
