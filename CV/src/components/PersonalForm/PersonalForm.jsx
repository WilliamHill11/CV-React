function PersonalForm() {
  return (
    <div>
      <h2>General Info</h2>

      <form className="personal-form">
        <label htmlFor="name" id="name">
          Name:
        </label>
        <input type="text" />

        <label htmlFor="email" id="email">
          Email:
        </label>
        <input type="email" />

        <label htmlFor="number" id="number">
          Phone Number:
        </label>
        <input type="number" />
      </form>
    </div>
  );
}

export default PersonalForm;
