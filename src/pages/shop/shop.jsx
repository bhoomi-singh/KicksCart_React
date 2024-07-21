import React from "react";
import { Row, Col, Typography } from "antd";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

const { Title } = Typography;

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle"> 
        <h1>KICKSCART</h1>
        <p>-From Streets to Sneaks, Kickscart's Got Your Feet-</p>
       
      </div>

      <Row gutter={[16, 16]} className="products">
        {PRODUCTS.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Product data={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
