import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/CryptoApi";
import LoadingState from "../components/Loading";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return <LoadingState isLoading={isFetching} />;
  const stats = data?.data?.stats;

  return (
    <React.Fragment>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total CryptoCurrencies"
            value={millify(stats.total, {
              space: true,
              precision: 2,
            })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(stats.totalExchanges, {
              space: true,
              precision: 2,
            })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(stats.totalMarketCap, {
              space: true,
              precision: 2,
            })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(stats.total24hVolume, {
              space: true,
              precision: 2,
            })}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(stats.totalMarkets, {
              space: true,
              precision: 2,
            })}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Crypto Currencies in the world</Title>
        <Title level={3} className='show-more'><Link to='/crypto-currencies'>Show more</Link></Title>
      </div>
      <CryptoCurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/news'>Show more</Link></Title>
      </div>
      <News simplified/>
    </React.Fragment>
  );
};

export default Home;