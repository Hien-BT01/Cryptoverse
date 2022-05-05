import { Fragment, useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/CryptoApi";
import { Card, Col, Input, Row } from "antd";
import LoadingState from "../components/Loading";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [filterCrypto, setFilterCrypto] = useState("");

  useEffect(() => {
    const filteredCryptos = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(filterCrypto.toLowerCase())
    );
    setCryptos(filteredCryptos);
  }, [data, filterCrypto]);

  if (isFetching) return <LoadingState isLoading={isFetching} />;

  const filterCryptoHandler = (event) => {
    setFilterCrypto(event.target.value);
  };

  return (
    <Fragment>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search CryptoCurrencies"
            onChange={filterCryptoHandler}
          />
        </div>
      )}
      <Row gutter={[32, 32]}>
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.uuid}>
            <Link to={`/crypto/${crypto.uuid}`}>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                extra={
                  <img
                    src={crypto.iconUrl}
                    className="crypto-image"
                    alt={crypto.name}
                  />
                }
                hoverable
              >
                <p>Price: {millify(crypto.price)}</p>
                <p>MarketCap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default CryptoCurrencies;
