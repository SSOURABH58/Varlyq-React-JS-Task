import React from 'react';
import { useStyles } from './styles';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import Album from '../Album';
import { selectPhotos } from '../../redux/albums/selectors';
import { useSelector } from 'react-redux';

const numberOfPhotos = 10;

const Albums: React.FC<IProps> = ({ title, id, photos }) => {
    const classes = useStyles();
    // const photos = useSelector(selectPhotos);

    return (
        <Grid classes={{ root: classes.root }}>
            <Typography classes={{ root: classes.title }} variant="h6" component="h2">
                {title}
            </Typography>
            {photos
                ?.filter((photo) => photo.albumId === id)
                .map((photo, index) => (
                    <Album key={index} photo={photo} />
                ))}
        </Grid>
    );
};

interface IProps {
    title?: string;
    id?: number;
    photos?: any[];
}
export default React.memo(Albums);
