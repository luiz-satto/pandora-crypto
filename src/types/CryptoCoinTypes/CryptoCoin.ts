interface ILink {
    name: string,
    url: string,
    type: string
}

interface ISupply {
    confirmed: boolean,
    circulating: string,
    total: string
}

interface IAllTimeHigh {
    price: string;
    timestamp: number;
}

export type CryptoCoin = {
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
    links: ILink[];
    supply: ISupply;
    allTimeHigh: IAllTimeHigh;
    numberOfMarkets: number;
    numberOfExchanges: number;
}