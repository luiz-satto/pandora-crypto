import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../../assets/cryptocurrency.png';

const { Title } = Typography;
const { Item } = Menu;

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const handleRezise = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleRezise, true);
        handleRezise();
        return window.removeEventListener('resize', handleRezise);
    }, []);

    useEffect(() => {
        setActiveMenu(screenSize >= 768);
    }, [screenSize]);

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Title level={2} className='logo'><Link to='/'>{process.env.REACT_APP_TITLE}</Link></Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme='dark'>
                    <Item key={1} icon={<HomeOutlined />}>
                        <Link to='/' onClick={() => setActiveMenu(screenSize >= 768)}>Home</Link>
                    </Item>
                    <Item key={2} icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies' onClick={() => setActiveMenu(screenSize >= 768)}>Cryptocurrencies</Link>
                    </Item>
                    <Item key={3} icon={<MenuOutlined />}>
                        <Link to='/exchanges' onClick={() => setActiveMenu(screenSize >= 768)}>Exchanges</Link>
                    </Item>
                    <Item key={4} icon={<BulbOutlined />}>
                        <Link to='/news' onClick={() => setActiveMenu(screenSize >= 768)}>News</Link>
                    </Item>
                </Menu>
            )}
        </div>
    )
}

export default Navbar;
