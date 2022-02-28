import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '1rem',
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 600,
        lineHeight: '1.2',
        fontFamily: 'Inter,sana-serif',
    },
    large: {
        width: 48,
        height: 48,
    },
}));
