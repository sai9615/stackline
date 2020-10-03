import {GET_DATA} from './types';
import data from '../data/Webdev_data2.json';

export const fetchData = () => ({
    type: GET_DATA,
    payload: data[0]
})