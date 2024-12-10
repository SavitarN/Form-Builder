import React from "react";

const FieldLibrary = ({ addField }) => {
  const fieldTypes = [
    { id: "text", label: "Text Field", type: "text" },
    { id: "select", label: "Select Field", type: "select" },
    { id: "radio", label: "Radio Buttons", type: "radio" },
  ];

  return (
    <div className="field-library">
      <h3>Field Library</h3>
      {fieldTypes.map((field) => (
        <button key={field.id} onClick={() => addField(field)}>
          {field.label}
        </button>
      ))}
    </div>
  );
};

export default FieldLibrary;
