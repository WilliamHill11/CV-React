const EducationForm = ({ education, setEducation }) => {
  const handleFormChange = (event, index) => {
    let data = [...education];
    data[index][event.target.name] = event.target.value;
    setEducation(data);
  };

  const addFields = () => {
    let object = {
      school: '',
      program: '',
      finishDate: '',
    };

    setEducation([...education, object]);
  };

  return (
    <div>
      <h2>Education</h2>
      <form>
        {education.map((form, index) => {
          return (
            <div key={index} className="form-style">
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
};

export default EducationForm;
