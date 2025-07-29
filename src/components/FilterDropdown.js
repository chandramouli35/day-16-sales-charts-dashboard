import { useState } from "react";

function FilterDropdown({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("revenue");

  const handleChange = (e) => {
    setSelectedFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <select
        value={selectedFilter}
        onChange={handleChange}
        className="p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white"
      >
        <option value="revenue">Monthly Revenue</option>
        <option value="users">Daily Users</option>
        <option value="regions">Region Distribution</option>
      </select>
    </div>
  );
}

export default FilterDropdown;
