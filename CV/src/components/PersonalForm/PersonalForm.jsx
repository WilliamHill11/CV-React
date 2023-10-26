const PersonalForm = ({ setPersonal, personal }) => {
  return (
    <div>
      <h2>General Info</h2>

      <form>
        <div className="form-style">
          <label htmlFor="name" id="name">
            Name:
          </label>
          <input
            type="text"
            onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
          />

          <label htmlFor="email" id="email">
            Email:
          </label>
          <input
            type="email"
            onChange={(e) =>
              setPersonal({ ...personal, email: e.target.value })
            }
          />

          <label htmlFor="number" id="number">
            Phone Number:
          </label>
          <input
            type="number"
            onChange={(e) =>
              setPersonal({ ...personal, number: e.target.value })
            }
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
