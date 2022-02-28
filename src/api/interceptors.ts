import axios from 'axios';
import config from '../config';
import { StoreType } from '../configStore';

const interceptor = (store: StoreType): void => {
    console.log('called');
};
export default {
    interceptor,
};
