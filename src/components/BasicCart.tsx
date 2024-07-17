import { Badge, Card, Col, Row, Button, Anchor } from 'antd/lib';
import { MdOutlineComment } from "react-icons/md";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

import { FC } from 'react'

type Props = {  
  title: string,
  graph: any
}

const BasicCart: FC<Props> = (props) => {

  return (<>
    <Card style={{marginBottom:"1em"}}>
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
          <BsFileEarmarkBarGraph/>
        </Col>
        <Col style={alignRight} flex={"auto"}>
          <span style={{fontSize:"small", marginTop:"-0.3em", marginRight:"0.3em", color:"lightgray"}}>3 <MdOutlineComment/></span>
        </Col>
      </Row>
    </Card>
  </>)
};

export default BasicCart;

const alignRight = { display: 'flex', justifyContent: 'flex-end' }
const alignLeft = { display: 'flex', justifyContent: 'flex-start' }