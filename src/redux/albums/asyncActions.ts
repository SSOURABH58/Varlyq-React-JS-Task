import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config';

export const asyncFetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
    try {
        const response = await axios.get(`${config.API_URI}/albums`);
        return response.data;
    } catch (error: any) {
        const errorMessage = error?.response?.data?.message || error.message || 'There was an error';
        throw new Error(errorMessage);
    }
});
export const asyncFetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
    try {
        const response = await axios.get(`${config.API_URI}/photos`);
        return response.data;
    } catch (error: any) {
        const errorMessage = error?.response?.data?.message || error.message || 'There was an error';
        throw new Error(errorMessage);
    }
});
