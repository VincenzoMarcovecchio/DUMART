import React from 'react'
import { Row, Col, Card } from 'antd'
import data from './data.json'

const FeaturedProducts = () => {
  return (
    <Row className="mb-2" type="flex">
      {data.map((product, i) => (
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          key={product.name}
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/featured-products-bg/${i + 1}.jpg)` }}
        >
          <Card
            className="featured-product h-full rounded-none"
            bordered={false}
            bodyStyle={{ padding: 15 }}
          >
            <Row className="p-4">
              <Col xs={20} sm={18} md={18} lg={19} xl={19}>
                <h3 className="mb-1 text-white">{product.name}</h3>
                <p className="mb-0">
                  {product.description}
                  <br />
                  <a href={product.link} className="block text-white">
                    Continua a leggere...
                  </a>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default FeaturedProducts
