import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import "./BarChatr.css"
import BarCustom from './BarCustom';
import Loder from '../Loder/Loder';



function TransactionsBarChart({ selectedMonth }) {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchChartData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://assesment-hn6f.onrender.com/api/barchart/${selectedMonth.value}`);
      setChartData(response.data);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [selectedMonth]);

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData, selectedMonth]);

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
    <div className='bar-chart'>
    <h1 className='chart-head'>Bar Chart Stats -{selectedMonth.label}  </h1> 
      <BarCustom  seriesData={seriesData}/>               
    </div>
    </>
  );
}

export default TransactionsBarChart;
