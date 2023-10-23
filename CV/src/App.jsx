import { useState } from 'react';
import './App.css';
import EducationForm from './components/EducationForm/EducationForm';
import PersonalForm from './components/PersonalForm/PersonalForm';
import WorkExperienceForm from './components/WorkExperienceForm/WorkExperienceForm';
import Results from './components/Results';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [school, setSchool] = useState('');
  const [program, setProgram] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [description, setDescription] = useState('');
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
          <PersonalForm
            setName={setName}
            setEmail={setEmail}
            setNumber={setNumber}
          />
          <EducationForm
            setSchool={setSchool}
            setProgram={setProgram}
            setFinishDate={setFinishDate}
          />
          <WorkExperienceForm
            setCompany={setCompany}
            setPosition={setPosition}
            setStart={setStart}
            setFinish={setFinish}
            setDescription={setDescription}
          />
          <div className="center-btn">
            <button className="btn" onClick={hideForm}>
              Submit
            </button>
          </div>
        </div>
        <div className="form-result">
          <Results
            name={name}
            email={email}
            number={number}
            school={school}
            program={program}
            finishDate={finishDate}
            company={company}
            position={position}
            start={start}
            finish={finish}
            description={description}
            setForm={setForm}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
