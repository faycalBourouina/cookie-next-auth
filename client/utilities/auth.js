import axios from 'axios';
import { USER_LOGIN, USER_PROFILE, USER_ERROR } from './types';

export const submitCredentials = async ({ email, password }) => {
    try {  
        const { data } = await axios.post('/auth/login', { email, password });
        return {
            type: USER_LOGIN,
            payload: data

        }
    } catch(e) {
        const { status, statusText } = e.response;
        return {
            type: USER_ERROR,
            payload: {
                status,
                statusText
            }
        }
    } 
}; 

export const getUser = async () => {
    try {
        const { data } = await axios.get('/user/profile');
        return {
            type: USER_PROFILE,
            payload: data
        }
        
    } catch(e) {
        const { status, statusText } = e.response;
        return {
            type: USER_ERROR,
            payload: {
                status,
                statusText
            }
        }
    }   
}