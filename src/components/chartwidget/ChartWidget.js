import React from 'react';
//import { Card } from '@mui/material'
import './chartwidget.css';
import { FaUsers } from 'react-icons/fa';

import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];


const ChartWidget = () => {
  return (
    <>
     <section className='chartwidget-section'>
        <div className='container'>

            <div className='cw-left'>
                <div className='total-visitors'>
                  <div className='w-top'>
                    <div className='tv-icon cw-flex'>
                      <FaUsers size={20} />
                    </div>
                    <div className='v-right'>
                      <p>Total Site visitors</p>
                      <h3>46k</h3>
                    </div>
                  </div>

                  <div className='w-bottom'>

                  </div>
                </div>

                <div className='total-deliveries'>
                <div className='w-top'>
                    <div className='td-icon cw-flex'>
                      <FaUsers size={20} />
                    </div>
                    <div className='v-right'>
                      <p>Total Site visitors</p>
                      <h3>46k</h3>
                    </div>
                  </div>

                  <div className='w-bottom'>

                  </div>
                </div>

                <div className='total-clients'>
                <div className='w-top'>
                    <div className='tc-icon cw-flex'>
                      <FaUsers size={20} />
                    </div>
                    <div className='v-right'>
                      <p>Total Site visitors</p>
                      <h3>46k</h3>
                    </div>
                  </div>

                  <div className='w-bottom'>

                  </div>
                </div>

                <div className='total-riders'>
                <div className='w-top'>
                    <div className='tr-icon cw-flex'>
                      <FaUsers size={20} />
                    </div>
                    <div className='v-right'>
                      <p>Total Site visitors</p>
                      <h3>46k</h3>
                    </div>
                  </div>

                  <div className='w-bottom'>

                  </div>
                </div>
            </div>

            <div className='cw-right'>
            <div className="chart">
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default ChartWidget