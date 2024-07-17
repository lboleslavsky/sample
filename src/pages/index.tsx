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