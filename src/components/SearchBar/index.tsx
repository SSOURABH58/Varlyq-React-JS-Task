import { InputBase, makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/albums/selectors';
import { changeFilter } from '../../redux/albums/slice';

const useStyles = makeStyles({
    InputBase: {
        color: '#7F3DFF',
        padding: '0.4rem 1rem',
        fontSize: '.9rem',
        borderRadius: '5px',
        background: '#EEE5FF',
        marginBottom: '2rem',
    },
});

const SearchBar: React.FC<IProps> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFilter(e.target.value));
    };
    return (
        <InputBase
            color={'primary'}
            classes={{ root: classes.InputBase }}
            placeholder="See your financial report"
            fullWidth={true}
            inputProps={{ 'aria-label': 'search' }}
            endAdornment={<ArrowForwardIosIcon fontSize="inherit" />}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
            value={filter}
        />
    );
};

interface IProps {
    title?: string;
}
export default React.memo(SearchBar);
