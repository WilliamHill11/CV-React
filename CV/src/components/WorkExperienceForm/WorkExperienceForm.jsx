function WorkExperienceForm() {
  return (
    <div className="personal-form">
      <h2>Work Experience</h2>

      <form>
        <label htmlFor="company" id="company">
          Company:
        </label>
        <input type="text" />

        <label htmlFor="position" id="position">
          Position:
        </label>
        <input type="text" />

        <label htmlFor="start-date" id="start-date">
          Starting Date:
        </label>
        <input type="text" />

        <label htmlFor="finish-date" id="finish-date">
          Finish Date:
        </label>
        <input type="text" />

        <label htmlFor="job-description" id="job-description">
          Job Description:
        </label>
        <textarea
          name="job-description"
          id="job-description"
          cols="30"
          rows="10"
        ></textarea>
      </form>
    </div>
  );
}

export default WorkExperienceForm;
