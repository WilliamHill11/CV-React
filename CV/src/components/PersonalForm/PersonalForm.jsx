import { useState } from 'react';

const PersonalForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handlePersonalForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>General Info</h2>

      <form onSubmit={handlePersonalForm}>
        <label htmlFor="name" id="name">
          Name:
        </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email" id="email">
          Email:
        </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="number" id="number">
          Phone Number:
        </label>
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
        <button>submit</button>
      </form>
      <li>{name}</li>
      <li>{email}</li>
      <li>{number}</li>
    </div>
  );
};

export default PersonalForm;
