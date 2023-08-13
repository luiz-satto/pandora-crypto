export interface CryptoHistory {
    price: string;
    timestamp: number;
}

export interface CryptoCoinHistory {
    data: {
        change: string
        history: CryptoHistory[]
    }
}