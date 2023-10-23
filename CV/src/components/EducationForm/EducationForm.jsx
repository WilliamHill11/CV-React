function EducationForm({ setSchool, setProgram, setFinishDate }) {
  return (
    <div className="personal-form">
      <h2>Education</h2>

      <form>
        <label htmlFor="school" id="school">
          School Name:
        </label>
        <input type="text" onChange={(e) => setSchool(e.target.value)} />

        <label htmlFor="program" id="program">
          Program Name:
        </label>
        <input type="text" onChange={(e) => setProgram(e.target.value)} />

        <label htmlFor="date" id="date">
          Finish Date:
        </label>
        <input type="date" onChange={(e) => setFinishDate(e.target.value)} />
      </form>
    </div>
  );
}

export default EducationForm;
