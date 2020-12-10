import React from "react";
import Dropdown from "./components/Dropdown";

const items = [
  { title: "what it do", content: "it do js stuff" },
  { title: "why", content: "cause" },
  { title: "how do", content: "components" }
];

const options = [
  { label: "fancy red", value: "red" },
  { label: "fancy green", value: "green" },
  { label: "fancy blue", value: "blue" }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown selected={selected} options={options} />
    </div>
  );
};
