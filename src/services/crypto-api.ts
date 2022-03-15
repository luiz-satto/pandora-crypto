import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CryptoCoinData } from '../types/cryptoCoinData';

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API_KEY
};

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getCoins: builder.query<CryptoCoinData, number>({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
    }),
});

export const {
    useGetCoinsQuery
} = cryptoApi;