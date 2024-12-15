import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = ({ salesData }: any) => {
  // Dados do gráfico
  const data = {
    labels: salesData.map((item: any)=> item.month), // Labels para os meses
    datasets: [
      {
        label: 'Porcentagem de Vendas',
        data: salesData.map((item: any)=> item.percentage), // Dados de vendas
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opções de configuração
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Porcentagem de Vendas - Últimos Meses',
      },
    },
  };

  return <Bar data={data}/>;
};

export default SalesChart;
