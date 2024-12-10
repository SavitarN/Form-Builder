import React from "react";

const PreviewMode = ({ formFields }) => {
  return (
    <div className="preview-mode">
      <h3>Form Preview</h3>
      {formFields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          {/* Render field dynamically */}
          <FieldRenderer field={field} />
        </div>
      ))}
    </div>
  );
};

export default PreviewMode;
