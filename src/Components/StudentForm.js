import React from "react";
const StudentForm = ({ handleSaveClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    handleSaveClick();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name: </label>
        <input id="name" />

        <label htmlFor="image">Enter Image URL</label>
        <input id="image" />

        <label htmlFor="social">Enter Social</label>
        <input />

        <label htmlFor="sunSign">Enter sun sign</label>
        <input />

        <label htmlFor="bio">Enter bio: </label>
        <textarea id="bio" name="bio"></textarea>

        <input type="submit" />
      </form>
    </div>
  );
};

export default StudentForm;
