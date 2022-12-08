import React, {useState} from "react"; 
import { useHistory } from "react-router-dom";

import DropDown from "./DropDown";

const AddStudentForm = ({addNewStudent, cohortIndex, setCohortIndex, cohorts}) => {
   
    const history = useHistory();

    const handleButton = () => {
        setCohortIndex(1)
        history.push(`/`) 
        // window.history.back();
    }
    
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
        setCohortIndex(1)
        history.push(`/`) 
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewStudentObj({ 
            ...newStudentObj,
            [key]: value
        });
    };

    console.log(cohorts[cohortIndex -2 ])
  return (
    <div id="new-studentform-container">
        { cohorts[cohortIndex -2] ? 
            <h3>Add new student to {cohorts[cohortIndex - 2 ].region}: {cohorts[cohortIndex - 2].start_date}</h3>
            : <h3>Please select a cohort from the dropdown!</h3>
        }
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

        <label htmlFor="sunSign">What's Your Star Sign?</label>
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
        
      <button className="nvm-button" onClick={handleButton}>Nvm!</button>
      </form>
    </div>
  );
};

export default AddStudentForm;