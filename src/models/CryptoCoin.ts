interface Link {
    name: string;
    url: string;
    type: string;
}

interface Supply {
    confirmed: boolean;
    circulating: string;
    total: string;
}

interface AllTimeHigh {
    price: string;
    timestamp: number;
}

export interface CryptoStats {
    total: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
};

export interface CryptoCoin {
    uuid: string;
    symbol: string;
    name: string;
    description: string;
    color: string;
    iconUrl: string;
    marketCap: string;
    price: string;
    btcPrice: string;
    listedAt: number;
    change: string;
    rank: number;
    sparkline: string[];
    coinrankingUrl: string;
    "24hVolume": string;
    links: Link[];
    supply: Supply;
    allTimeHigh: AllTimeHigh;
    numberOfMarkets: number;
    numberOfExchanges: number;
}

export interface CryptoCoinList {
    stats: CryptoStats;
    coins: CryptoCoin[]
}