import React from 'react'
import { Row, Col } from 'antd'

const Header = ({ header }) => (
  <Row type="flex" justify="center" align="middle">
    <Col span={4} className="text-right">
      <h2 className="text-2xl">{header.name}</h2>
      <h5>{header.position}</h5>
    </Col>
    <Col span={4} className="text-center">
      <a href="/">
        <img
          src="/profilodiunpoeta.jpg"
          alt="profilodiunpoeta"
          width={80}
          className="rounded-full max-w-3/4"
        />
      </a>
    </Col>
  </Row>
)

export default Header
