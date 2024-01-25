import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface DonutChartProps {
  data: number[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  const series = data;

  return (
    <div className="donut-chart">
      <Chart options={options} series={series} type="donut" width="300" />
    </div>
  );
};

export default DonutChart;
