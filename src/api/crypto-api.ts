import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CryptoCoin, CryptoCoinList } from '../models/CryptoCoin';
import { CryptoCoinHistory } from '../models/CryptoHistory';

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API_KEY
};

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_BASE_URL }),
    endpoints: (builder) => ({
        getCryptoCoins: builder.query<CryptoCoinList, number>({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query<CryptoCoin, string | undefined>({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query<CryptoCoinHistory, { coinId: string | undefined; timePeriod: string; }>({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
    }),
});

export const {
    useGetCryptoCoinsQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;