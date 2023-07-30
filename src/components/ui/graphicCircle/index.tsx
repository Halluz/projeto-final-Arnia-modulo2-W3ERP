import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

type TypeGraphicCircle = {
  percentage: number
}

import { configuration } from './style'

export function GraphicCircle({ percentage }: TypeGraphicCircle) {
  const series = [percentage]

  return (
    <div>
      <ReactApexChart
        options={configuration}
        series={series}
        type="radialBar"
        width={90}
        height={90}
      />
    </div>
  )
}
