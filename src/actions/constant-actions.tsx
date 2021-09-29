import { AxiosError } from 'axios';
import { ERROR } from './types';

export const dispatchError = (err: AxiosError, type?: string) => {
    return {
        type: type ?? ERROR,
        payload: {
            message: type ?? ERROR + ' ' + err?.response?.data?.message ?? '',
            context: `${err.response?.status}: ${err.request?.statusText}\n${err.response?.config.url}`,
        },
    };
};