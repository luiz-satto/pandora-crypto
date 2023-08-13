import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from '../../components';
import { CryptoCurrencies } from '../crypto';
import { CryptoDetails } from '../crypto/details';
import { News } from '../news';
import { HomeDetails } from './details';

export const Home = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route index element={<HomeDetails />} />
                            <Route path="cryptocurrencies" element={<CryptoCurrencies />} />
                            <Route path="cryptocurrencies/:coinId" element={<CryptoDetails />} />
                            <Route path="news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Pandora Crypto <br />
                        All rights reserved.
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}
