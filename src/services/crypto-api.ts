import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CryptoCoinDetails, CryptoCoins } from '../types/CryptoCoinTypes/CryptoCoinData';

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API_KEY
};

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_BASE_URL }),
    endpoints: (builder) => ({
        getCryptoCoins: builder.query<CryptoCoins, number>({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query<CryptoCoinDetails, string>({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
    }),
});

export const {
    useGetCryptoCoinsQuery,
    useGetCryptoDetailsQuery
} = cryptoApi;