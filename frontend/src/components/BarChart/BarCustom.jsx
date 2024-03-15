import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

export default function BarCustom({ seriesData }) {
  const data = seriesData.map((value, index) => ({
    name: `${index * 100} - ${(index + 1) * 100 - 1}`,
    item: value,
  }));

  // Add the last range for "901-above"
  data.push({ name: "901-above", item: seriesData[seriesData.length - 1] });

  const renderBarLabel = (props) => {
    return (
      <text
        x={props.x}
        y={props.y + 20}
        fill="#666"
        textAnchor="middle"
        fontSize={12}
      >
        {props.value}
      </text>
    );
  };

  return (
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
      barSize={20}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="item" fill="#8884d8" background={{ fill: "#eee" }}>
        <LabelList dataKey="item" position="bottom" content={renderBarLabel} />
      </Bar>
    </BarChart>
  );
}