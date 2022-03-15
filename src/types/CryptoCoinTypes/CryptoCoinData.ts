import { CryptoCoin } from "./CryptoCoin"
import { CryptoStats } from "./CryptoStats"

export type CryptoCoinData = {
    data: {
        stats: CryptoStats
        coins: CryptoCoin[]
    }
}