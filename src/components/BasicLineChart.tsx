import dynamic from 'next/dynamic';
const Line = dynamic(() => import('@ant-design/plots').then(({ Line }) => Line),
  { ssr: false }
);
import { FC } from 'react'

type Props = {
  data: any
}

const BasicLineChart: FC<Props> = (props) => {

  const data = props.data

  const config = {
    data,
    height: 350,
    width: 350,
    xField: 'date',
    yField: 'value',
  };

  return <Line {...config} />;
};

export default BasicLineChart;
