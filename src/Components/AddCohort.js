import React, {useState} from "react";


const AddButton = ({addNewCohort}) => {

    const [display, setDisplay] = useState(false)
    const [newCohortObj, setNewCohortObj] = useState ({
        region: "",
        start_date: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay(true)
        setTimeout(() => {
            setDisplay(false)
        }, 800)

        addNewCohort(newCohortObj)

        setNewCohortObj({
            region: "",
            start_date: ""
        });
        
    }

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewCohortObj({ 
            ...newCohortObj,
            [key]: value
        });
    };
   


   return(
    <div id='add-cohort-form'>
        <form onSubmit = {handleSubmit}>
            {/* <label htmlFor="new-cohort">Want to add a new cohort?</label><br></br> */}
            
            <input 
                type="text" 
                name="region"
                placeholder="Region (East, West, South)"
                value={newCohortObj.region}
                onChange={handleChange} />
             <input 
                type="text" 
                name="start_date"
                placeholder="Start Date (MM-DD-YYYY)"
                value={newCohortObj.start_date}
                onChange={handleChange} />
            <input 
                type="submit" 
                id="add-cohort-button" 
                name="add-cohort" 
                value="Submit" />
        </form >
        {display ? <h3>Added to DropDown</h3> : null}
    </div>
   )
}

export default AddButton;