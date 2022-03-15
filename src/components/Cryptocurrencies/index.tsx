import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import millify from 'millify';
import { useGetCoinsQuery } from '../../services/crypto-api';
import { Coin } from '../../types/coin';

interface IProps {
    simplified?: boolean
}

const Cryptocurrencies: React.FC<IProps> = props => {
    const count = props.simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCoinsQuery(count);
    const [cryptos, setCryptos] = useState<Coin[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        let coins = cryptosList?.data?.coins;
        if (coins) {
            const filteredData = coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
            if (filteredData) setCryptos(filteredData);
        }
    }, [cryptosList, searchTerm]);

    if (isFetching) return <Fragment>'Loading...'</Fragment>;

    return (
        <Fragment>
            {!props.simplified && (
                <div className='search-crypto'>
                    <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            )}

            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
                        <Link to={`crypto/${currency.uuid}`}>
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
        </Fragment>
    )
}

export default Cryptocurrencies;