function EducationForm({ setEducation, education }) {
  return (
    <div className="personal-form">
      <h2>Education</h2>

      <form>
        <label htmlFor="school" id="school">
          School Name:
        </label>
        <input
          type="text"
          onChange={(e) =>
            setEducation({ ...education, school: e.target.value })
          }
        />

        <label htmlFor="program" id="program">
          Program Name:
        </label>
        <input
          type="text"
          onChange={(e) =>
            setEducation({ ...education, program: e.target.value })
          }
        />

        <label htmlFor="date" id="date">
          Finish Date:
        </label>
        <input
          type="date"
          onChange={(e) =>
            setEducation({ ...education, finishDate: e.target.value })
          }
        />
      </form>
      {/* <button onClick={handleDegree}>+ Add Degree</button> */}
    </div>
  );
}

export default EducationForm;
