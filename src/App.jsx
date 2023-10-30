import { useState } from 'react';
import './App.css';
import EducationForm from './components/EducationForm';
import PersonalForm from './components/PersonalForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import Results from './components/Results';

function App() {
  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    number: '',
  });

  const [education, setEducation] = useState([
    { school: '', program: '', finishDate: '' },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      company: '',
      position: '',
      startDate: '',
      finishDate: '',
      description: '',
      form: '',
    },
  ]);

  const [form, setForm] = useState('form-page');

  const hideForm = () => {
    setForm('hide');
  };

  return (
    <div>
      <header className="title-section">
        <h1>My CV</h1>
      </header>
      <main className="form-wrapper">
        <div className={form}>
          <PersonalForm setPersonal={setPersonal} personal={personal} />
          <EducationForm setEducation={setEducation} education={education} />
          <WorkExperienceForm
            setWorkExperience={setWorkExperience}
            workExperience={workExperience}
          />
          <div className="center-btn">
            <button className="btn" onClick={hideForm}>
              Submit
            </button>
          </div>
        </div>
        <div className="form-result">
          <Results
            personal={personal}
            education={education}
            workExperience={workExperience}
            setForm={setForm}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
