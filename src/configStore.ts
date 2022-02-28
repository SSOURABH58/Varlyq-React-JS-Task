import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import albumsReducer from './redux/albums/slice';

const rootReducer = combineReducers({
    rooms: albumsReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, Action>;

const store = configureStore({
    reducer: rootReducer,
});

export type StoreType = typeof store;
export default store;
