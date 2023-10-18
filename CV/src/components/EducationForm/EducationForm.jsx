function EducationForm() {
  return (
    <div className="personal-form">
      <h2>Education</h2>

      <form>
        <label htmlFor="school" id="school">
          School Name:
        </label>
        <input type="text" />

        <label htmlFor="program" id="program">
          Program Name:
        </label>
        <input type="text" />

        <label htmlFor="date" id="date">
          Finish Date:
        </label>
        <input type="date" />
      </form>
    </div>
  );
}

export default EducationForm;
