const WorkExperienceForm = ({ workExperience, setWorkExperience }) => {
  const handleFormChange = (event, index) => {
    let data = [...workExperience];
    data[index][event.target.name] = event.target.value;
    setWorkExperience(data);
  };

  const addFields = () => {
    let object = {
      company: '',
      startingDate: '',
      finishDate: '',
      jobDescription: '',
    };

    setWorkExperience([...workExperience, object]);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <form>
        {workExperience.map((form, index) => {
          return (
            <div key={index} className="form-style">
              <label htmlFor="company" id="company">
                Company:
              </label>
              <input
                name="company"
                onChange={(event) => handleFormChange(event, index)}
                value={form.company}
              />
              <label htmlFor="position" id="position">
                Position:
              </label>
              <input
                name="position"
                onChange={(event) => handleFormChange(event, index)}
                value={form.position}
              />
              <label htmlFor="startDate" id="startDate">
                Starting Date:
              </label>
              <input
                type="date"
                name="startDate"
                onChange={(event) => handleFormChange(event, index)}
                value={form.startDate}
              />
              <label htmlFor="finishDate" id="finishDate">
                Finish Date:
              </label>
              <input
                type="date"
                name="finishDate"
                onChange={(event) => handleFormChange(event, index)}
                value={form.finishDate}
              />
              <label htmlFor="jobDescription" id="jobDescription">
                Job Description:
              </label>
              <textarea
                name="jobDescription"
                id="jobDescription"
                cols="30"
                rows="10"
                onChange={(event) => handleFormChange(event, index)}
                value={form.jobDescription}
              ></textarea>
            </div>
          );
        })}
      </form>
      <button onClick={addFields} className="addMoreBtn">
        + Add Experience
      </button>
    </div>
  );
};

export default WorkExperienceForm;
