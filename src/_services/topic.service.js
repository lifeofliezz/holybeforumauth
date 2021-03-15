import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const topicService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/topics`, requestOptions).then(handleResponse);
}