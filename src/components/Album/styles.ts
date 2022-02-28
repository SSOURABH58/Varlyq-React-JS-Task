import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
    },
    title: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '1.235',
        fontFamily: 'Inter,sana-serif',
    },
    large: {
        width: 48,
        height: 48,
    },
    album: {
        marginTop: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '1rem',
    },
    titleCont: {
        flexGrow: 1,
    },
    links: {
        color: '#91919F',
        fontSize: '.8rem',
        fontWeight: 500,
        letterSpacing: '.2px',
        fontFamily: 'Inter,sana-serif',
    },
    created: {
        color: 'green',
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '1.235',
        fontFamily: 'Inter,sana-serif',
    },
    aboveThreshold: {
        color: 'green',
    },
    belowThreshold: {
        color: 'red',
    },
}));
