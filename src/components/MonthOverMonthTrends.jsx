// MonthOverMonthTrends.jsx

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/**
 * Sample data sets for a customs broker dashboard:
 *
 * 1) monthlyShipmentsData: comparing # of shipments from each month.
 * 2) monthlyDutiesData: showing total duties over the past 6 months.
 * 3) shipmentStatusData: distribution of shipments by status.
 */

// 1) Example: shipments per month
const monthlyShipmentsData = [
  { month: "Jan", shipments: 120 },
  { month: "Feb", shipments: 140 },
  { month: "Mar", shipments: 180 },
  { month: "Apr", shipments: 160 },
  { month: "May", shipments: 200 },
  { month: "Jun", shipments: 240 },
];

// 2) Duties paid each month (in thousands of dollars)
const monthlyDutiesData = [
  { month: "Jan", duties: 38 },
  { month: "Feb", duties: 41 },
  { month: "Mar", duties: 55 },
  { month: "Apr", duties: 46 },
  { month: "May", duties: 62 },
  { month: "Jun", duties: 70 },
];

// 3) Pie chart showing statuses and their percentages
const shipmentStatusData = [
  { name: "Pending Release", value: 35 },
  { name: "Held for Review", value: 10 },
  { name: "Cleared", value: 40 },
  { name: "In Clearance", value: 15 },
];

// Colors for pie slices
const COLORS = ["#FFBB28", "#FF8042", "#00C49F", "#0088FE"];

const MonthOverMonthTrends = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-gray-800">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Month‐Over‐Month Trends
      </h2>

      {/* Overview / Explanation Text */}
      <p className="text-sm text-gray-600 mb-3">
        Below charts highlight key customs metrics: monthly shipment volumes,
        duties paid, and distribution by status.
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* 1) BAR CHART: Shipments by Month */}
        <div className="bg-gray-50 rounded border border-gray-200 p-3">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Shipments by Month
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyShipmentsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="shipments" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 2) LINE CHART: Duties Paid Over Time */}
        <div className="bg-gray-50 rounded border border-gray-200 p-3">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Duties Paid (in $000)
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyDutiesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="duties"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 3) PIE CHART: Shipment Status Distribution */}
        <div className="bg-gray-50 rounded border border-gray-200 p-3">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Shipment Status Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={shipmentStatusData}
                dataKey="value"
                nameKey="name"
                outerRadius={70}
                fill="#8884d8"
                label
              >
                {shipmentStatusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MonthOverMonthTrends;
