import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import ICryptoCoinHistory from '../../interfaces/ICryptoCoinHistory';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

interface IProps {
    coinHistory: ICryptoCoinHistory | undefined,
    currentPrice: string,
    coinName: string
}

const { Title } = Typography;
const LineChart: React.FC<IProps> = props => {
    let coinHistoryData = props.coinHistory?.data;
    let coinTimestamp = [];
    let coinPrice = [];

    if (coinHistoryData?.history) {
        for (let i = 0; i < coinHistoryData?.history.length; i++) {
            let timestamp = coinHistoryData?.history[i].timestamp * 1000;
            coinTimestamp.push(new Date(timestamp).toLocaleDateString());
            coinPrice.push(coinHistoryData?.history[i].price);
        }
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options: any = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <Fragment>
            <Row className='chart-header'>
                <Title level={2} className='chart-title'>{props.coinName} Price Chart</Title>
                <Col className='price-container' key={props.coinName}>
                    <Title level={5} className='price-change'>{coinHistoryData?.change}%</Title>
                    <Title level={5} className='current-price'>Current {props.coinName} Price: $ {props.currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </Fragment>
    )
}

export default LineChart
