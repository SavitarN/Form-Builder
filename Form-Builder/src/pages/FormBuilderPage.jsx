// src/pages/FormBuilderPage.jsx

import React, { useState } from "react";
import FormBuilder from "../components/FormBuilder/FormBuilder"; // Import FormBuilder component
import PreviewMode from "../components/FormBuilder/PreviewMode"; // Import PreviewMode to see form preview

const FormBuilderPage = () => {
  const [formFields, setFormFields] = useState([]); // Store the form fields

  return (
    <div className="form-builder-page">
      <h2>Create Your Custom Form</h2>

      {/* FormBuilder to drag and drop form fields */}
      <div className="builder-section">
        <FormBuilder setFormFields={setFormFields} />
      </div>

      {/* PreviewMode to show live preview of the form */}
      <div className="preview-section">
        <h3>Form Preview</h3>
        <PreviewMode formFields={formFields} />
      </div>
    </div>
  );
};

export default FormBuilderPage;
