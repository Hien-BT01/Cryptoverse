import React from "react";
import { Space, Layout } from "antd";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const LayoutPage = ({ children }) => {
  return (
    <React.Fragment>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout style={{ padding: 24 }}>{children}</Layout>
        <div className="footer">
          <Footer />
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LayoutPage;
