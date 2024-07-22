import dynamic from 'next/dynamic';
const Pie = dynamic(() => import('@ant-design/plots').then(({ Pie }) => Pie),
  { ssr: false }
);
import { FC } from 'react'

type Props = {
  data: any
}

const CHART_WIDTH = 350;
const CHART_HEIGHT = 350;

const BasicLineChart: FC<Props> = (props) => {

  const config = {
    data: props.data,
    height: CHART_HEIGHT,
    width: CHART_WIDTH,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

export default BasicLineChart;
