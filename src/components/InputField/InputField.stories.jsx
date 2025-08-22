import InputField from "./InputField";
import { useState } from "react";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return <InputField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Username",
  placeholder: "Enter username",
  helperText: "This is a helper text",
};

export const Error = Template.bind({});
Error.args = {
  label: "Email",
  placeholder: "Enter email",
  invalid: true,
  errorMessage: "Email is required",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Name",
  placeholder: "Disabled field",
  disabled: true,
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  placeholder: "Enter password",
  type: "password",
};
