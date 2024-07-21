import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import "./contact.css";

const { Title, Paragraph } = Typography;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the data to a server)
    console.log(formData);
    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <Row gutter={24} justify="center">
        <Col xs={24} sm={12} md={8} className="contact-details">
          <Title level={3}>Customer Care</Title>
          <Paragraph className="contact-item">
            <PhoneOutlined className="contact-icon" /> Phone Numbers:
          </Paragraph>
          <ul className="contact-list">
            <li>+91 2345671890</li>
            <li>+91 9876542421</li>
          </ul>
          <Paragraph className="contact-item">
            <MailOutlined className="contact-icon" /> Email IDs:
          </Paragraph>
          <ul className="contact-list">
            <li>support_kickscart@gmail.com</li>
            <li>informationcentre.kickscart@gmail.com</li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={12} className="contact-form-container">
          <Title level={3}>Contact Us</Title>
          <Form
            className="contact-form"
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: "Please enter your message" },
              ]}
            >
              <Input.TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
