import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchAlbums, asyncFetchPhotos } from '../../redux/albums/asyncActions';
import { selectAlbums, selectAlbumsStructure } from '../../redux/albums/selectors';
import { Container, makeStyles, Typography } from '@material-ui/core';
import SearchBar from '../../components/SearchBar';
import Albums from '../../components/Albums';

const useStyles = makeStyles({
    Container: {
        padding: '1rem',
    },
});

const Home: React.FC = () => {
    const albums = useSelector(selectAlbums);
    const AlbumsStructure = useSelector(selectAlbumsStructure);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncFetchAlbums());
        dispatch(asyncFetchPhotos());
    }, []);
    const classes = useStyles();
    return (
        <Container classes={{ root: classes.Container }} maxWidth="lg">
            <SearchBar />
            {AlbumsStructure.length ? (
                AlbumsStructure.map(({ title, id, photos }, index) => (
                    <Albums key={index} title={title} id={id} photos={photos} />
                ))
            ) : (
                <Typography variant="h6" component="h2">
                    No results found.
                </Typography>
            )}
        </Container>
    );
};

export default Home;
