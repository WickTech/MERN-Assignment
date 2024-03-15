import React, { useState, useCallback } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const PieComponent = ({ props }) => {
  const [hoveredField, setHoveredField] = useState(null);
  const data = [
    { name: "Sold item", value: props.totalSoldItems },
    { name: "Not sold item", value: props.totalNotSoldItems },
  ];
  const handleMouseEnter = useCallback((entry) => {
    setHoveredField(entry.name);
  }, []);

  const handleMouseLeave = () => {
    setHoveredField(null);
  };
  const renderCustomizedLabel = useCallback(
    ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    },
    []
  );

  return (
    <div style={{ display: "flex" }}>
      <PieChart width={400} height={400} className="pie-head">
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              onMouseOver={() => handleMouseEnter(entry)}
               
            />
          ))}
        </Pie>
        <Tooltip />
        {hoveredField && <div>Hovered Field: {hoveredField}</div>}
      </PieChart>
   
      
      
    </div>
  );
};

export default PieComponent;
