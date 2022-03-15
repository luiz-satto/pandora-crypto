import { CryptoNews } from "./CryptoNews";

interface IQueryContext {
    _type: string,
    originalQuery: string,
    adultIntent: boolean
};

interface ISort {
    _type: string,
    name: string,
    id: string,
    isSelected: boolean,
    url: string
}

export type CryptoNewsData = {
    _type: string;
    readLink: string;
    queryContext: IQueryContext;
    totalEstimatedMatches: number;
    sort: ISort[];
    value: CryptoNews[];
}