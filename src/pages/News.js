import React, { useState } from "react";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";
import { useGetCryptosQuery } from "../services/CryptoApi";
import LoadingState from "../components/Loading";
import { Avatar, Card, Col, Row, Select, Typography } from "antd";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const { Option } = Select;

const News = ({ simplified }) => {
  const [category, setCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: category,
    count: simplified ? 6 : 12,
  });
  const { data: cryptosCurrencies } = useGetCryptosQuery(simplified ? 10 : 100);

  if (isFetching) return <LoadingState isLoading={isFetching} />;

  const filterOptionHandler = (input, option) => {
    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a crypto"
            optionFilterProp="children"
            onChange={(value) => setCategory(value)}
            filterOption={filterOptionHandler}
          >
            <Option value="Cryptocurrency">CryptoCurrency</Option>
            {cryptosCurrencies?.data?.coins.map((coin) => (
              <Option value={coin.name} key={coin.uuid}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <a href={news.url} target="_blank" rel="noreferrer">
            <Card
              style={{ height: "100%" }}
              hoverable
              className="news-card"
              title={news.name}
              loading={isFetching}
              cover={
                <img
                  src={news.image?.thumbnail?.contentUrl || demoImage}
                  alt="crypto-news"
                />
              }
            >
              <Card.Meta
                description={news.description}
                className="text-overflow"
              ></Card.Meta>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider.at(0)?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                  />
                  <Typography.Text>
                    {news.provider.at(0)?.name.substring(0, 20)}
                  </Typography.Text>
                </div>
                <Typography.Text>
                  {moment(news.datePublished).startOf("second").fromNow()}
                </Typography.Text>
              </div>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default News;
