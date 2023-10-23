const Results = ({
  name,
  email,
  number,
  school,
  program,
  finishDate,
  company,
  position,
  start,
  finish,
  description,
  setForm,
}) => {
  const editForm = () => {
    setForm('form-page');
  };

  return (
    <div className="form-page">
      <h1 className="cv-title">CV</h1>
      <div className="general-info">
        <h2 className="cv-sub-title">Personal</h2>
        <li>
          <b>Name: </b> {name}
        </li>
        <li>
          <b>Email:</b> {email}
        </li>
        <li>
          <b>Phone Number:</b> {number}
        </li>
      </div>
      <div className="education">
        <h2 className="cv-sub-title">Education</h2>
        <li>
          <b>School Name: </b> {school}
        </li>
        <li>
          <b>Program Name: </b> {program}
        </li>
        <li>
          <b>Finish Date: </b> {finishDate}
        </li>
      </div>
      <div className="work-experience">
        <h2 className="cv-sub-title">Work</h2>
        <li>
          <b>Company: </b> {company}
        </li>
        <li>
          <b>Position: </b> {position}
        </li>
        <li>
          <b>Starting Date: </b> {start}
        </li>
        <li>
          <b>Finish Date: </b> {finish}
        </li>
        <li>
          <b>Job Description: </b> {description}
        </li>
      </div>
      <div className="center-btn">
        <button className="btn" onClick={editForm}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Results;
