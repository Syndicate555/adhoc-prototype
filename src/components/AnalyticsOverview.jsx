// File: AnalyticsOverview.jsx

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
 * SAMPLE DATA SETS
 *
 * 1) monthlyShipmentsData: # of shipments by month.
 * 2) monthlyDutiesData: total duties paid each month (line chart).
 * 3) shipmentStatusData: distribution of shipments by status (pie chart).
 * 4) monthlyBreakdownData: stacked bar chart showing duties, taxes, broker fees by month.
 */

// 1) Shipments per month
const monthlyShipmentsData = [
  { month: "Jan", shipments: 120 },
  { month: "Feb", shipments: 140 },
  { month: "Mar", shipments: 180 },
  { month: "Apr", shipments: 160 },
  { month: "May", shipments: 200 },
  { month: "Jun", shipments: 240 },
];

// 2) Duties paid each month (in thousands)
const monthlyDutiesData = [
  { month: "Jan", duties: 38 },
  { month: "Feb", duties: 41 },
  { month: "Mar", duties: 55 },
  { month: "Apr", duties: 46 },
  { month: "May", duties: 62 },
  { month: "Jun", duties: 70 },
];

// 3) Pie chart for shipment statuses
const shipmentStatusData = [
  { name: "Pending Release", value: 35 },
  { name: "Held for Review", value: 10 },
  { name: "Cleared", value: 40 },
  { name: "In Clearance", value: 15 },
];

// Pie chart colors for each status
const STATUS_COLORS = ["#FFBB28", "#FF8042", "#00C49F", "#0088FE"];

// 4) Stacked data example: duties, taxes, and fees each month (in thousands)
const monthlyBreakdownData = [
  { month: "Jan", duties: 20, taxes: 10, fees: 5 },
  { month: "Feb", duties: 25, taxes: 12, fees: 7 },
  { month: "Mar", duties: 30, taxes: 15, fees: 10 },
  { month: "Apr", duties: 28, taxes: 14, fees: 8 },
  { month: "May", duties: 35, taxes: 18, fees: 12 },
  { month: "Jun", duties: 40, taxes: 20, fees: 14 },
];

// Additional colors for stacked bars
const BAR_COLORS = {
  duties: "#8884d8", // purple
  taxes: "#82ca9d", // green
  fees: "#ffc658", // gold
};

const AnalyticsOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-gray-800">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Analytics & Insights
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Explore key customs brokerage metrics: monthly shipment volumes, duties
        paid, distribution by status, and a breakdown of fees over time.
      </p>

      {/* Container for multiple charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Left column: two stacked charts */}
        <div className="space-y-6">
          {/* Shipments by Month (Vertical Bar Chart) */}
          <div className="bg-gray-50 rounded border border-gray-200 p-3">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Shipments by Month
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyShipmentsData} margin={{ top: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="shipments" fill="#8884d8" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Duties vs. Taxes vs. Fees (Stacked Bar) */}
          <div className="bg-gray-50 rounded border border-gray-200 p-3">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Duties, Taxes & Fees (Monthly)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyBreakdownData} margin={{ top: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                {/* For a built-in legend, you can add <Legend /> if desired */}
                <Bar dataKey="duties" stackId="a" fill={BAR_COLORS.duties} />
                <Bar dataKey="taxes" stackId="a" fill={BAR_COLORS.taxes} />
                <Bar dataKey="fees" stackId="a" fill={BAR_COLORS.fees} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right column: line chart and pie chart */}
        <div className="space-y-6">
          {/* Duties Paid Over Time (Line Chart) */}
          <div className="bg-gray-50 rounded border border-gray-200 p-3">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Duties Paid (in $000)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyDutiesData} margin={{ top: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="duties"
                  stroke="#82ca9d"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Shipment Status Breakdown (Pie Chart) */}
          <div className="bg-gray-50 rounded border border-gray-200 p-3">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Shipment Status Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={shipmentStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label
                >
                  {shipmentStatusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={STATUS_COLORS[index % STATUS_COLORS.length]}
                    />
                  ))}
                </Pie>
                {/* The Legend component automatically infers color from the Pie */}
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ fontSize: "0.8rem" }}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
