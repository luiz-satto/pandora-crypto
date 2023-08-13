import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptoCoinsQuery } from '../../api/crypto-api';
import { CryptoCoin } from '../../models/CryptoCoin';
import { Loader } from '../../components';
import millify from 'millify';

interface Props {
    simplified?: boolean
}

export const CryptoCurrencies = (props: Props) => {
    const count = props.simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptoCoinsQuery(count);
    const [cryptos, setCryptos] = useState<CryptoCoin[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        let coins = cryptosList?.coins;
        if (coins) {
            const filteredData = coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
            if (filteredData) setCryptos(filteredData);
        }
    }, [cryptosList, searchTerm]);

    if (isFetching) return <Loader />;

    return (
        <>
            {!props.simplified && (
                <div className='search-crypto'>
                    <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            )}

            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
                        <Link to={(props.simplified ? `cryptocurrencies/` : '') + `${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className='crypto-image' src={currency.iconUrl} alt={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(Number(currency.price))}</p>
                                <p>Market Cap: {millify(Number(currency.marketCap))}</p>
                                <p>Daily Change: {millify(Number(currency.change))}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}