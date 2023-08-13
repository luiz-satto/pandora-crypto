import { useState } from 'react'
import {
    Select,
    Typography,
    Row,
    Col,
    Avatar,
    Card
} from 'antd';
import moment from 'moment';
import { useGetNewsQuery } from '../../api/crypto-news-api';
import { useGetCryptoCoinsQuery } from '../../api/crypto-api';
import { Loader } from '../../components';

interface Props {
    simplified?: boolean
}

const { Text, Title } = Typography;
const { Option } = Select;

export const News = (props: Props) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetNewsQuery({ newsCategory, count: props.simplified ? 6 : 12 });
    const { data } = useGetCryptoCoinsQuery(100);

    if (!cryptoNews?.value) {
        return <Loader />;
    }

    const demoImage = '';
    return (
        <Row gutter={[24, 24]}>
            {!props.simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className='select-news'
                        placeholder='Select a Crypto'
                        optionFilterProp='items'
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => {
                            if (option?.items) {
                                let items = option?.items.toString().toLowerCase();
                                return items.indexOf(input.toLowerCase()) >= 0;
                            }

                            return false;
                        }}
                    >
                        <Option value='Cryptocurrency'>All</Option>
                        {data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card className='news-card' hoverable>
                        <a href={news.url} target='_blank' rel="noreferrer">
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>{news.name}</Title>
                                <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
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
    );
}