import React from "react";
import Accordion from "./components/Accordion";

const items = [
  { title: "what it do", content: "it do js stuff" },
  { title: "why", content: "cause" },
  { title: "how do", content: "components" }
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
