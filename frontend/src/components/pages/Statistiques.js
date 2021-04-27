import React from 'react'
import { Pie, Line } from 'react-chartjs-2'


const BarChart = () => {

  const data = {
  labels: ['Janvier', 'Fevirer', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
  datasets: [{
    label: 'Statistiques',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: '#C29B61',
    tension: 0.1
  }]
};
  return (
    <div>
      <Line  data={data} />

    </div>
  )
}

export default BarChart