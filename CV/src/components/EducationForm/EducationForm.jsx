function EducationForm({
  // setEducation,
  // education,
  handleInputChange,
  addFormField,
  formFields,
  setFormFields,
}) {
  return (
    <div>
      <h2>Dynamic Form Fields</h2>
      {formFields.map((field) => (
        <div key={field.id}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleInputChange(e, field.id)}
          />
        </div>
      )}
      <button onClick={addFormField}>Add Field</button>
    </div>
  );
}

export default EducationForm;
