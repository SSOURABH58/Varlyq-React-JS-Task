import React, { useState } from 'react';
import { useStyles } from './styles';
import { Avatar, Box, Grid, Typography, Link } from '@material-ui/core';

const threshold = 75;

const Album: React.FC<IProps> = ({ photo: photo }) => {
    const { title, url, thumbnailUrl } = photo !== undefined ? photo : { title: '', url: '', thumbnailUrl: '' };
    const [Amount, setAmount] = useState(Math.floor(Math.random() * (250 - 50 + 1)) + 50);
    const classes = useStyles();
    const preventDefault = (event: { preventDefault: () => any }) => event.preventDefault();

    return (
        <Grid container direction="row" classes={{ root: classes.album }}>
            <Grid item>
                <Avatar variant="square" src={thumbnailUrl} className={classes.large} />
            </Grid>
            <Grid item classes={{ root: classes.titleCont }}>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <Typography classes={{ root: classes.title }} variant="h4" component="h2">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link href="#" onClick={preventDefault} classes={{ root: classes.links }} underline="always">
                            {url}
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <Typography
                            classes={{
                                root: classes.created,
                                colorPrimary: classes.aboveThreshold,
                                colorSecondary: classes.belowThreshold,
                            }}
                            color={Amount > threshold ? 'primary' : 'secondary'}
                            variant="h4"
                            component="h2"
                        >
                            {`$ ${Amount}`}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography classes={{ root: classes.links }} variant="h4" component="h2">
                            10:00 AM
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

interface photo {
    albumId?: number;
    title?: string;
    url?: string;
    thumbnailUrl?: string;
}
interface IProps {
    photo?: photo;
}
export default Album;
