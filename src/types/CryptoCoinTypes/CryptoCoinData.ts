import { CryptoCoin } from "./CryptoCoin"
import { CryptoStats } from "./CryptoStats"

export type CryptoCoins = {
    data: {
        stats: CryptoStats
        coins: CryptoCoin[]
    }
}

export type CryptoCoinDetails = {
    data: {
        stats: CryptoStats
        coin: CryptoCoin
    }
}