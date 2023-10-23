const PersonalForm = ({ setName, setEmail, setNumber }) => {
  return (
    <div>
      <h2>General Info</h2>

      <form>
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
      </form>
    </div>
  );
};

export default PersonalForm;
