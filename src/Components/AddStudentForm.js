import React, {useState} from "react"; 

import DropDown from "./DropDown";

const AddStudentForm = ({handleButton, addNewStudent, cohortIndex}) => {
    
    const [newStudentObj, setNewStudentObj] = useState ({
            name: "",
            image: "",
            bio: "",
            sun_sign: "",
            social: "",
            city_state: "",
            country: "",
            cohort_id: cohortIndex,
        })

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewStudentObj({
            name: "",
            image: "",
            bio: "",
            sun_sign: "",
            social: "",
            city_state: "",
            country: "",
            cohort_id: cohortIndex,
        })
        addNewStudent(newStudentObj)
        handleButton();
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewStudentObj({ 
            ...newStudentObj,
            [key]: value
        });
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
            id="name" 
            name="name"
            value={newStudentObj.name}
            onChange={handleChange}/>
        <label htmlFor="image">Profile Pic:</label>
        <input 
            id="image"
            name="image"
            value={newStudentObj.image}
            onChange={handleChange} />

        <label htmlFor="city_state">Location:</label>
        <input 
            id="city_state"
            name="city_state"
            placeholder="City, State"
            value={newStudentObj.city_state}
            onChange={handleChange}/>

        <label htmlFor="country">Country:</label>
        <input 
            id="country"
            name="country"
            placeholder="Country"
            value={newStudentObj.country}
            onChange={handleChange}/>

        <label htmlFor="social">GitHub Username:</label>
        <input 
            id="social"
            name="social"
            value={newStudentObj.social}
            onChange={handleChange}/>

        <label htmlFor="sunSign">What's Your Sign Sign?</label>
        <input  
            id="sun_sign"
            name="sun_sign"
            value={newStudentObj.sun_sign}
            onChange={handleChange}/>

        <label htmlFor="bio">What would you like to share?</label>
        <textarea 
            id="bio"
            name="bio"
            value={newStudentObj.bio}
            onChange={handleChange}>
        </textarea>

        <input type="submit" />
        
      <button id="nvm-button" onClick={handleButton}>Nvm!</button>
      </form>
    </div>
  );
};

export default AddStudentForm;