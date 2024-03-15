import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import Loder from '../Loder/Loder';
import PieCircle from './PieCircle';




function PieChart({ selectedMonth }) {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchChartData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://assesment-hn6f.onrender.com/api/piechart/${selectedMonth.value}`);
      setChartData(response.data);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [selectedMonth]);

  useEffect(() => {
    fetchChartData();
  }, [selectedMonth]);

  if (loading) {
    return <div><Loder/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!chartData) {
    return null; // Or any other fallback UI
  }
   const seriesData = chartData.map(data => data.count);

  return (
   <> 
   <div className="chart-all">
      <div><h1 className='chart-head'>Pie Chart Stats - {selectedMonth.label} </h1> </div>
    <div className="chart">
        
      <div className="chart-data">
        {chartData.map((value)=>{
            return <>
            <p> {value.category} :{value.count} </p>
            </>
        })}
      </div>
      <div className="chart-pie">
       <PieCircle props={chartData}/>
      </div>
    </div>
    </div>
    </>
  );
}

export default PieChart;
