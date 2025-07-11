import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import useLocalStorage from "../hooks/useLocalStorage";

const StreakChart = () => {
  const [habits] = useLocalStorage("habits", []);

  const frequencyCounts = {
    daily: 0,
    weekly: 0,
    monthly: 0,
  };

  habits.forEach((habit) => {
    frequencyCounts[habit.frequency] =
      (frequencyCounts[habit.frequency] || 0) + 1;
  });

  const data = Object.keys(frequencyCounts).map((key) => ({
    frequency: key.charAt(0).toUpperCase() + key.slice(1),
    count: frequencyCounts[key],
  }));

  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-teal-200 rounded-3xl px-6 py-10 max-w-5xl mx-auto mt-14 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">
        Your Habit Frequency
      </h2>

      {habits.length > 0 ? (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 40 }}
          >
            <defs>
              <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.95} />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.7} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
            <XAxis
              dataKey="frequency"
              tick={{ fill: "#0f766e", fontSize: 15, fontWeight: 500 }}
              label={{
                value: "Frequency",
                position: "bottom",
                dy: 20,
                style: { fill: "#0f766e", fontWeight: "bold" },
              }}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fill: "#0f766e", fontSize: 15 }}
              label={{
                value: "Habits Count",
                angle: -90,
                dx: -10,
                style: { fill: "#0f766e", fontWeight: "bold" },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f0fdfa",
                borderRadius: "8px",
                border: "1px solid #99f6e4",
                color: "#0f766e",
              }}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{ paddingTop: "10px", color: "#0f766e" }}
            />
            <Bar
              dataKey="count"
              fill="url(#barColor)"
              radius={[12, 12, 0, 0]}
              barSize={60}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-6">
          No data yet. Add some habits to see the chart!
        </p>
      )}
    </div>
  );
};

export default StreakChart;
