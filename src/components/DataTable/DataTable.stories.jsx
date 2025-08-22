import DataTable from "./DataTable";

export default {
  title: "Components/DataTable",
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

const sampleData = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
];

const sampleColumns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

export const Default = Template.bind({});
Default.args = {
  data: sampleData,
  columns: sampleColumns,
};

export const Loading = Template.bind({});
Loading.args = {
  data: [],
  columns: sampleColumns,
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  data: [],
  columns: sampleColumns,
};

export const Selectable = Template.bind({});
Selectable.args = {
  data: sampleData,
  columns: sampleColumns,
  selectable: true,
};

