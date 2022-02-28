import { RootStateType } from '../../configStore';
import { FetchStatusType } from '../../shared/@types';

export const selectAlbums: (state: RootStateType) => any[] = (state) => state.rooms.albums;
export const selectPhotos: (state: RootStateType) => any[] = (state) => state.rooms.photos;
export const selectFilter: (state: RootStateType) => string = (state) => state.rooms.filter;
export const selectAlbumsStructure: (state: RootStateType) => any[] = (state) => state.rooms.AlbumsStructure;
