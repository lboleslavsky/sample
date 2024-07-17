import { Card, Col, Row, Button, Anchor } from 'antd/lib';
import { FC } from 'react'

type Props = {  
  title: string,
  graph: any
}

const BasicCart: FC<Props> = (props) => {

  return (<>
    <Card>
      <Row>
        <Col style={alignLeft} flex={"auto"}>
          <h3>{props.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {props.graph}
        </Col>
      </Row>
      <Row>
        <Col style={alignLeft} flex={"50px"}>
          ...
        </Col>
        <Col style={alignRight} flex={"auto"}>
          ...
        </Col>
      </Row>
    </Card>
  </>)
};

export default BasicCart;

const alignRight = { display: 'flex', justifyContent: 'flex-end' }
const alignLeft = { display: 'flex', justifyContent: 'flex-start' }