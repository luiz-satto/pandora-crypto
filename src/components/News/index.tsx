import React, { Fragment } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetNewsQuery } from '../../services/crypto-news-api';

const { Text, Title } = Typography;
const { Option } = Select;

interface IProps {
    simplified?: boolean
}

const News: React.FC<IProps> = props => {
    const { data: cryptoNews } = useGetNewsQuery({ newsCategory: 'Cryptocurrency', count: props.simplified ? 6 : 12 });

    if (!cryptoNews?.value) return <Fragment>'Loading...'</Fragment>;

    const demoImage = '';

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card className='news-card' hoverable>
                        <a href={news.url} target='_blank' rel="noreferrer">
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>{news.name}</Title>
                                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news'></img>
                            </div>
                            <p>
                                {news.description.length > 100
                                    ? `${news.description.substring(0, 100)}`
                                    : news.description
                                }
                            </p>
                            <div className='provider-container'>
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
                                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('s').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News;