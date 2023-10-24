function WorkExperienceForm({ setWorkExperience, workExperience }) {
  return (
    <div className="personal-form">
      <h2>Work Experience</h2>

      <form>
        <label htmlFor="company" id="company">
          Company:
        </label>
        <input
          type="text"
          onChange={(e) =>
            setWorkExperience({ ...workExperience, company: e.target.value })
          }
        />

        <label htmlFor="position" id="position">
          Position:
        </label>
        <input
          type="text"
          onChange={(e) =>
            setWorkExperience({ ...workExperience, position: e.target.value })
          }
        />

        <label htmlFor="start-date" id="start-date">
          Starting Date:
        </label>
        <input
          type="date"
          onChange={(e) =>
            setWorkExperience({ ...workExperience, startDate: e.target.value })
          }
        />

        <label htmlFor="finish-date" id="finish-date">
          Finish Date:
        </label>
        <input
          type="date"
          onChange={(e) =>
            setWorkExperience({ ...workExperience, finishDate: e.target.value })
          }
        />

        <label htmlFor="job-description" id="job-description">
          Job Description:
        </label>
        <textarea
          name="job-description"
          id="job-description"
          cols="30"
          rows="10"
          maxLength="750"
          onChange={(e) =>
            setWorkExperience({
              ...workExperience,
              description: e.target.value,
            })
          }
        ></textarea>
      </form>
    </div>
  );
}

export default WorkExperienceForm;
