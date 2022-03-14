import { Coin } from "./coin"
import { Stats } from "./stats"

export type CryptoCoinData = {
    data: {
        stats: Stats
        coins: Coin[]
    }
}