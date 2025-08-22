import { useState } from "react";
import PropTypes from "prop-types";

export default function DataTable({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}) {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSort = (col) => {
    let direction = "asc";
    if (sortConfig && sortConfig.key === col.dataIndex && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: col.dataIndex, direction });
  };

  const sortedData = (() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  })();

  const handleRowSelect = (row) => {
    let newSelection = [];
    if (selectedRows.includes(row)) {
      newSelection = selectedRows.filter((r) => r !== row);
    } else {
      newSelection = [...selectedRows, row];
    }
    setSelectedRows(newSelection);
    onRowSelect && onRowSelect(newSelection);
  };

  return (
    <div className="overflow-x-auto rounded-2xl shadow-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-lg">
      {loading ? (
        <div className="p-6 text-center text-purple-500 font-semibold animate-pulse">Loading...</div>
      ) : data.length === 0 ? (
        <div className="p-6 text-center text-gray-400 italic">No data available</div>
      ) : (
        <table className="min-w-full border-collapse">
          <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
            <tr>
              {selectable && <th className="p-4"></th>}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="p-4 text-left font-semibold text-sm uppercase tracking-wide cursor-pointer select-none"
                  onClick={() => col.sortable && handleSort(col)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{col.title}</span>
                    {sortConfig?.key === col.dataIndex && (
                      <span className="text-yellow-300">
                        {sortConfig.direction === "asc" ? "▲" : "▼"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-colors duration-300"
              >
                {selectable && (
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded accent-pink-500"
                      checked={selectedRows.includes(row)}
                      onChange={() => handleRowSelect(row)}
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="p-4 border-t text-sm text-gray-700">
                    {row[col.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  selectable: PropTypes.bool,
  onRowSelect: PropTypes.func,
};
