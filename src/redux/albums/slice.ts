import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Album from '../../components/Album';
import { asyncFetchAlbums, asyncFetchPhotos } from './asyncActions';

// export interface IRoom {
//     _id: string;
//     title: string;
//     description: string;
// }

// export interface IDetailedRoom extends IRoom {
//     messages: {
//         sentBy: string;
//         content: string;
//         createdAt: number;
//     }[];
// }

interface photo {
    albumId?: number;
    title?: string;
    url?: string;
    thumbnailUrl?: string;
}

export type AlbumsStateType = {
    statusAlbums: string;
    statusPhotos: string;
    albums: any[];
    photos: photo[];
    filter: string;
    AlbumsStructure: any[];
};

const initialState: AlbumsStateType = {
    albums: [],
    photos: [],
    statusAlbums: '',
    statusPhotos: '',
    filter: '',
    AlbumsStructure: [],
};

const numberOfPhotos = 10;
const numberOfAlbums = 5;
const getAlbumsStructure = (albums: any[], photos: photo[], filter: string) =>
    albums
        ?.map((album: Record<string, unknown>) => ({
            ...album,
            photos: photos
                ?.filter((photo: photo) => photo.albumId === album.id && photo.title?.includes(filter))
                ?.slice(0, numberOfPhotos),
        }))
        .filter((album) => album.photos.length > 0)
        ?.slice(0, numberOfAlbums);

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        changeFilter(state: AlbumsStateType, action: any) {
            state.filter = action.payload;
            state.AlbumsStructure = getAlbumsStructure(state.albums, state.photos, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(asyncFetchAlbums.pending, (state) => {
            state.statusAlbums = 'pending';
        });
        builder.addCase(asyncFetchAlbums.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.statusAlbums = 'fulfilled';
            state.albums = action.payload;
            state.AlbumsStructure = getAlbumsStructure(action.payload, state.photos, state.filter);
        });
        builder.addCase(asyncFetchAlbums.rejected, (state, action) => {
            state.statusAlbums = 'rejected';
        });
        builder.addCase(asyncFetchPhotos.pending, (state) => {
            state.statusPhotos = 'pending';
        });
        builder.addCase(asyncFetchPhotos.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.statusPhotos = 'fulfilled';
            state.photos = action.payload;
            state.AlbumsStructure = getAlbumsStructure(state.albums, action.payload, state.filter);
        });
        builder.addCase(asyncFetchPhotos.rejected, (state, action) => {
            state.statusPhotos = 'rejected';
        });
    },
});

export const { changeFilter } = albumsSlice.actions;

export default albumsSlice.reducer;
