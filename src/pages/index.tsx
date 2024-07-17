import { trpc } from '../utils/trpc';
import type { NextPageWithLayout } from './_app';
import { Badge, Button, Col, Row } from 'antd/lib';
import BasicLineChart from '@/components/BasicLineChart';
import BasicRadialChart from '@/components/BasicRadialChart';
import BasicCart from '@/components/BasicCart';
import { FiDownload } from "react-icons/fi";
import { MdNotes } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";




const IndexPage: NextPageWithLayout = () => {
  const dataVaccinated = trpc.getDataVaccinated.useQuery()
  const dataSex = trpc.getDataSex.useQuery()

  return (
    <>
      <Row style={{ padding: "auto" }}>
        <Col style={alignLeft}>
          <div style={headerStyle}>Graph list</div>
        </Col>
        <Col style={alignRight} flex={"auto"}>
          <Row>
            <Col >
              <Button iconPosition={"end"} icon={<FiDownload/>}>Export to PDF</Button>
            </Col>
            <Col>
              <Button iconPosition={"end"} icon={<MdNotes/>}>Notes <span style={{fontSize:"small", marginRight:"0.3em", color:"lightgray"}}>(3)</span></Button>
            </Col>
            <Col>
              <Button iconPosition={"end"} icon={<IoFilterOutline/>}>Filter<Badge style={{background:"green"}} count={"9+"}></Badge></Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center" gutter={16}>
        <Col xs={{ flex: '100%' }}
          sm={{ flex: '50%' }}
          md={{ flex: '40%' }}
          lg={{ flex: '20%' }}
          xl={{ flex: '10%' }}>
          <BasicCart title={"Vaccinated"} graph={<BasicLineChart data={dataVaccinated.data} />} />
        </Col>
        <Col xs={{ flex: '100%' }}
          sm={{ flex: '50%' }}
          md={{ flex: '40%' }}
          lg={{ flex: '20%' }}
          xl={{ flex: '10%' }}>
          <BasicCart title={"Male/Female"} graph={<BasicRadialChart data={dataSex.data} />} />
        </Col>
      </Row>
    </>
  );
};

export default IndexPage;

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  marginLeft: '2em',
  color: 'black',
  height: 64
};

const alignRight = { display: 'flex', justifyContent: 'flex-end' }
const alignLeft = { display: 'flex', justifyContent: 'flex-start' }