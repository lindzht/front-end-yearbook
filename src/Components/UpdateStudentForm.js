import React, {useState} from "react";

const UpdateStudentForm = ({ id, studentData, handleClick, updateStudent}) => {
  
//     const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSaveClick();
//   };

    const [updateStudentObj, setUpdateStudentObj] = useState ({
        id: studentData.id,
        name: studentData.name,
        image: studentData.image,
        bio: studentData.bio,
        sun_sign: studentData.sun_sign,
        social: studentData.social,
        city_state: studentData.city_state,
        country: studentData.country
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setUpdateStudentObj({
            name: "",
            image: "",
            bio: "",
            sun_sign: "",
            social: "",
            city_state: "",
            country: "",
        })
        updateStudent(updateStudentObj)
        handleClick();
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setUpdateStudentObj({ 
            ...updateStudentObj,
            [key]: value
        });
    };


  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input 
            id="name"
            name="name"
            value={updateStudentObj.name}
            onChange={handleChange} />

        <label htmlFor="image">Image URL</label>
        <input 
            id="image"
            name="image"
            value={updateStudentObj.image}
            onChange={handleChange} />

        <label htmlFor="city_state">Location:</label>
        <input 
            id="city_state"
            name="city_state"
            placeholder="City, State"
            value={updateStudentObj.city_state}
            onChange={handleChange}/>

        <label htmlFor="country">Country:</label>
        <input 
            id="country"
            name="country"
            placeholder="Country"
            value={updateStudentObj.country}
            onChange={handleChange}/>

        <label htmlFor="social">Github Username</label>
        <input 
            id="social"
            name="social"
            value={updateStudentObj.social}
            onChange={handleChange} />

        <label htmlFor="sunSign">Your sun sign</label>
        <input 
            id="sun_sign"
            name="sun_sign"
            value={updateStudentObj.sun_sign}
            onChange={handleChange}/>

        <label htmlFor="bio">What would you like to share?</label>
        <textarea 
            id="bio"
            name="bio"
            value={updateStudentObj.bio}
            onChange={handleChange}></textarea>

        <input type="submit" onClick={handleSubmit} />
      </form>
      <button className="nvm-button" onClick={handleClick}>Nvm!</button>
    </div>
  );
};

export default UpdateStudentForm;