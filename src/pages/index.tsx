import { trpc } from '../utils/trpc';
import type { NextPageWithLayout } from './_app';
import { Col, Row } from 'antd/lib';
import BasicLineChart from '@/components/BasicLineChart';
import BasicRadialChart from '@/components/BasicRadialChart';
import BasicCart from '@/components/BasicCart';

const IndexPage: NextPageWithLayout = () => {
  const dataVaccinated = trpc.getDataVaccinated.useQuery()
  const dataSex = trpc.getDataSex.useQuery()

  return (
    <>
      <Row>
        <Col style={{ width: "50%", padding: "2em" }}>
          <BasicCart title={"Vaccinated"} graph={<BasicLineChart data={dataVaccinated.data} />} />
        </Col>
        <Col style={{ width: "50%", padding: "2em" }}>
          <BasicCart title={"Male/Female"} graph={<BasicRadialChart data={dataSex.data} />} />
        </Col>
      </Row>
    </>
  );
};

export default IndexPage;