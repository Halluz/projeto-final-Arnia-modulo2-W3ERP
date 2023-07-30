import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

export const configuration: ApexOptions = {
  fill: {
    colors: ['#796CE0']
  },
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '45%' },
      track: {
        background: '#000c40'
      },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: '12px',
          color: '#fff',
          fontWeight: 'bold'
        }
      }
    }
  }
}
