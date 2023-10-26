import { useState } from 'react';
import EducationForm from './EducationForm/EducationForm';

const Results = ({
  personal,
  education,
  workExperience,
  setForm,
  setEducation,
}) => {
  const editForm = () => {
    setForm('form-page');
  };

  return (
    <div className="form-page cv-form">
      <h1 className="cv-title">CV</h1>
      <div className="general-info">
        <h2 className="cv-sub-title">Personal</h2>
        <li>
          <b>Name: </b> {personal.name}
        </li>
        <li>
          <b>Email:</b> {personal.email}
        </li>
        <li>
          <b>Phone Number:</b> {personal.number}
        </li>
      </div>
      <div className="education">
        <h2 className="cv-sub-title">Education</h2>
        {education.map((form, index) => {
          return (
            <div key={index}>
              <li className="school">
                <b>School Name: </b> {form.school}
              </li>
              <li className="education-section">
                <b>Program Name: </b> {form.program}
              </li>
              <li className="education-section">
                <b>Finish Date: </b> {form.finishDate}
              </li>
              <br />
            </div>
          );
        })}
      </div>
      <div className="work-experience">
        <h2 className="cv-sub-title">Work</h2>
        <li>
          <b>Company: </b> {workExperience.company}
        </li>
        <li>
          <b>Position: </b> {workExperience.position}
        </li>
        <li>
          <b>Starting Date: </b> {workExperience.startDate}
        </li>
        <li>
          <b>Finish Date: </b> {workExperience.finishDate}
        </li>
        <li>
          <b>Job Description: </b> {workExperience.description}
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
