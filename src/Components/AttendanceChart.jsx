import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AttendanceChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="className" /> {/* X-axis shows class names */}
        <YAxis /> {/* X-axis shows attendance percentage */}
        <Tooltip /> {/* Show hover tooltip */}
        <Bar dataKey="attendance" fill="#075407ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceChart;
