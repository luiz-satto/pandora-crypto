import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../../assets/cryptocurrency.png';

const Navbar: React.FC = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>{process.env.REACT_APP_TITLE}</Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'>

                </Button> */}
            </div>
            <Menu theme='dark'>
                <Menu.Item key={1} icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key={2} icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key={3} icon={<MenuOutlined />}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Menu.Item>
                <Menu.Item key={4} icon={<BulbOutlined />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;
