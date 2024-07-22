import dynamic from 'next/dynamic';
const Line = dynamic(() => import('@ant-design/plots').then(({ Line }) => Line),
  { ssr: false }
);
import { FC } from 'react'

type Props = {
  data: any
}

const CHART_WIDTH = 350;
const CHART_HEIGHT = 350;

const BasicLineChart: FC<Props> = (props) => {

  const data = props.data

  const config = {
    data,
    height: CHART_HEIGHT,
    width: CHART_WIDTH,
    xField: 'date',
    yField: 'value',
  };

  return <Line {...config} />;
};

export default BasicLineChart;
