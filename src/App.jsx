import InputField from "./components/InputField/InputField";
import DataTable from "./components/DataTable/DataTable";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const data = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
  ];

  const columns = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 p-10">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-xl">
           UI Components Demo
        </h1>

        {/* Input Field Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-violet-200">
          <h2 className="text-2xl font-semibold text-violet-800 mb-4">
            User Input
          </h2>
          <InputField
            label="Username"
            placeholder="Enter username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            helperText="This is a helper text"
            errorMessage="This field is required"
            invalid={!value}
            variant="filled"
            size="md"
          />
        </div>

        {/* Data Table Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-violet-200">
          <h2 className="text-2xl font-semibold text-violet-800 mb-4">
            Data Table
          </h2>
          <DataTable
            data={data}
            columns={columns}
            selectable
            onRowSelect={(rows) => console.log("Selected rows:", rows)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
