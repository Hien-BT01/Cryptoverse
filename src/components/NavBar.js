import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined
} from "@ant-design/icons";
import { Avatar, Typography, Menu, Button } from "antd";
import icon from "../images/cryptocurrency.png";

const { Title } = Typography;
const { Item } = Menu;

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleSize);
    handleSize()
    
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(previous => !previous)}>
          <MenuOutlined/>
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Item icon={<HomeOutlined />} key={1}>
            <Link to="/">Home</Link>
          </Item>
          <Item icon={<FundOutlined />} key={2}>
            <Link to="/crypto-currencies">Crypto Currencies</Link>
          </Item>
          <Item icon={<BulbOutlined />} key={4}>
            <Link to="/news">News</Link>
          </Item>
        </Menu>
      )}
    </div>
  );
};

export default NavBar;
