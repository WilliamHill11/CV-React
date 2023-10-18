// import { useState } from 'react';
import './App.css';
import EducationForm from './components/EducationForm/EducationForm';
import PersonalForm from './components/PersonalForm/PersonalForm';
import WorkExperienceForm from './components/WorkExperienceForm/WorkExperienceForm';

function App() {
  return (
    <div>
      <header className="title-section">
        <h1>My CV</h1>
      </header>
      <main className="form-wrapper">
        <div className="form-page">
          <PersonalForm />
          <EducationForm />
          <WorkExperienceForm />
        </div>
        <button>Submit</button>
        <div className="form-result">
          <h1>Your Results</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
