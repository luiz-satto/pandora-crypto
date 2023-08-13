interface Thumbnail {
    _type: string;
    contentUrl: string;
    width: number;
    height: number;
}

interface Image {
    _type: string;
    thumbnail: Thumbnail;
}

interface About {
    _type: string;
    readLink: string;
    name: string;
}

interface Provider {
    _type: string;
    name: string;
    image: Image;
}

interface QueryContext {
    _type: string;
    originalQuery: string;
    adultIntent: boolean;
};

interface Sort {
    _type: string;
    name: string;
    id: string;
    isSelected: boolean;
    url: string;
}

export interface CryptoNews {
    _type: string;
    name: string;
    url: string;
    image: Image;
    description: string;
    about: About[];
    provider: Provider[];
    datePublished: string;
}

export interface CryptoNewsData {
    _type: string;
    readLink: string;
    queryContext: QueryContext;
    totalEstimatedMatches: number;
    sort: Sort[];
    value: CryptoNews[];
}