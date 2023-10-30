import { useState } from 'react';

const Results = ({ personal, education, workExperience, setForm }) => {
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
              <li className="extra-style">
                <b>School Name: </b> {form.school}
              </li>
              <li className="extra-section">
                <b>Program Name: </b> {form.program}
              </li>
              <li className="extra-section">
                <b>Finish Date: </b> {form.finishDate}
              </li>
              <br />
            </div>
          );
        })}
      </div>
      <div className="work-experience">
        <h2 className="cv-sub-title">Work</h2>
        {workExperience.map((form, index) => {
          return (
            <div key={index}>
              <li className="extra-style">
                <b>Company: </b> {form.company}
              </li>
              <li className="extra-section">
                <b>Position: </b> {form.position}
              </li>
              <li className="extra-section">
                <b>Starting Date: </b> {form.startDate}
              </li>
              <li className="extra-section">
                <b>Finish Date: </b> {form.finishDate}
              </li>
              <li className="extra-section">
                <b>Job Description: </b> {form.jobDescription}
              </li>
              <br />
            </div>
          );
        })}
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
