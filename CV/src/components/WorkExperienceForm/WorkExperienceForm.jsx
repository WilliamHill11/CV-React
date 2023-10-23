function WorkExperienceForm({
  setCompany,
  setPosition,
  setStart,
  setFinish,
  setDescription,
}) {
  return (
    <div className="personal-form">
      <h2>Work Experience</h2>

      <form>
        <label htmlFor="company" id="company">
          Company:
        </label>
        <input type="text" onChange={(e) => setCompany(e.target.value)} />

        <label htmlFor="position" id="position">
          Position:
        </label>
        <input type="text" onChange={(e) => setPosition(e.target.value)} />

        <label htmlFor="start-date" id="start-date">
          Starting Date:
        </label>
        <input type="date" onChange={(e) => setStart(e.target.value)} />

        <label htmlFor="finish-date" id="finish-date">
          Finish Date:
        </label>
        <input type="date" onChange={(e) => setFinish(e.target.value)} />

        <label htmlFor="job-description" id="job-description">
          Job Description:
        </label>
        <textarea
          name="job-description"
          id="job-description"
          cols="30"
          rows="10"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </form>
    </div>
  );
}

export default WorkExperienceForm;
