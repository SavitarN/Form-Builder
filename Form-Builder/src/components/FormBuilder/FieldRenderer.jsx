import React from "react";

const FieldRenderer = ({ field }) => {
  switch (field.type) {
    case "text":
      return <input type="text" placeholder="Text Field" />;
    case "select":
      return (
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      );
    case "radio":
      return (
        <div>
          <label>
            <input type="radio" name="radio" /> Option 1
          </label>
          <label>
            <input type="radio" name="radio" /> Option 2
          </label>
        </div>
      );
    default:
      return null;
  }
};

export default FieldRenderer;
