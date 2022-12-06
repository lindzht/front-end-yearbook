import React from "react";


const AddButton = () => {
   return(
    <div id='landing-page-button'>
        <form>
            <label htmlFor="new-cohort">Want to add a new cohort?</label><br></br>
            <input type="text" id="new-cohort" name="new-cohort"></input>
            <input type="submit" id="add-cohort" name="add-cohort" value="Submit" />
        </form>
    </div>
   )
}

export default AddButton;