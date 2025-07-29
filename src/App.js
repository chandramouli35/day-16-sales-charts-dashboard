import { useState, useEffect } from "react";
import ChartContainer from "./components/ChartContainer";
import FilterDropdown from "./components/FilterDropdown";
import ThemeToggle from "./components/ThemeToggle";
import { mockData } from "./data/mockData";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [selectedDataset, setSelectedDataset] = useState("revenue");
  const { darkMode } = useTheme();

  useEffect(() => {
    // Simulate data fetch
  }, []);

  const datasets = {
    revenue: mockData.revenue,
    users: mockData.users,
    regions: mockData.regions,
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } p-4 sm:p-2 md:p-4`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sales Analytics Dashboard
        </h1>
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <FilterDropdown onFilterChange={setSelectedDataset} />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChartContainer data={datasets.revenue} chartType="bar" />
          <ChartContainer data={datasets.users} chartType="line" />
          <ChartContainer data={datasets.regions} chartType="pie" />
        </div>
      </div>
    </div>
  );
}

export default App;
