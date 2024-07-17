import dynamic from 'next/dynamic';
const Pie = dynamic(() => import('@ant-design/plots').then(({ Pie }) => Pie),
  { ssr: false }
);
import { FC } from 'react'

type Props = {
  data: any
}

const BasicLineChart: FC<Props> = (props) => {

  const config = {
    data: props.data,
    height: 350,
    width: 350,
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
