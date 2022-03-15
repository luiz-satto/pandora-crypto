import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../../assets/cryptocurrency.png';

const { Title } = Typography;
const { Item } = Menu;

const Navbar: React.FC = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Title level={2} className='logo'><Link to='/'>{process.env.REACT_APP_TITLE}</Link></Title>
                {/* <Button className='menu-control-container'></Button> */}
            </div>
            <Menu theme='dark'>
                <Item key={1} icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Item>
                <Item key={2} icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Item>
                <Item key={3} icon={<MenuOutlined />}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Item>
                <Item key={4} icon={<BulbOutlined />}>
                    <Link to='/news'>News</Link>
                </Item>
            </Menu>
        </div>
    )
}

export default Navbar;
