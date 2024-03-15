import React, { useEffect, useState } from "react";
import axios from "axios";
import PieComponent from "./PieComponent";


function Statistics({ selectedMonth }) {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    fetchStatistics();
  }, [selectedMonth]);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(
        `https://assesment-hn6f.onrender.com/api/statistics/${selectedMonth.value}`
      );
      setStatistics(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!statistics) {
    return <div><loder/></div>;
  }


  return (
    <div className="chart-all">
      <div><h1 className='chart-head'>Statistics Chart Stats - {selectedMonth.label} </h1> </div>
    <div className="chart">
        
      <div className="chart-data">
        <p>Total Sale Amount: {statistics.totalSaleAmount}</p>
        <p>Total Sold Items: {statistics.totalSoldItems}</p>
        <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
      </div>
      <div className="chart-pie">
       <PieComponent props={statistics}/>
      </div>
    </div>
    </div>
  );
}

export default Statistics;
