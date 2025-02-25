import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import budgetData from "../new-file.json"; // Import the JSON file

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartJSComponent = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const titles = budgetData.myBudget.map(item => item.title);
    const budgets = budgetData.myBudget.map(item => item.budget);

    setChartData({
      labels: titles,
      datasets: [
        {
          label: "Budget Distribution",
          data: budgets,
          backgroundColor: [
            "#ff6384", "#36a2eb", "#ffce56", "#4bc0c0",
            "#9966ff", "#ff9f40", "#c9cbcf"
          ]
        }
      ]
    });
  }, []);

  return (
    <div>
      <h2>Budget Distribution</h2>
      {chartData && <Pie data={chartData} />}
    </div>
  );
};

export default ChartJSComponent;