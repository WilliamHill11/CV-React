import { useState } from 'react';

function Form() {
  const [formFields, setFormFields] = useState([
    { school: '', program: '', finishDate: '' },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      school: '',
      program: '',
      finishDate: '',
    };

    setFormFields([...formFields, object]);
  };

  return (
    <div className="personal-form">
      <form>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <label htmlFor="school" id="school">
                School Name:
              </label>
              <input
                name="school"
                onChange={(event) => handleFormChange(event, index)}
                value={form.name}
              />
              <label htmlFor="program" id="program">
                Program Name:
              </label>
              <input
                name="program"
                onChange={(event) => handleFormChange(event, index)}
                value={form.program}
              />
              <label htmlFor="date" id="date">
                Finish Date:
              </label>
              <input
                name="finishDate"
                onChange={(event) => handleFormChange(event, index)}
                value={form.finishDate}
              />
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More</button>
    </div>
  );
}

export default Form;
