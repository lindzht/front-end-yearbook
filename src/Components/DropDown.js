import React, { useState } from "react";
import AddButton from "./AddButton";

const DropDown = () => {


  return (
    <div>
          <label htmlFor="cohorts"> Pick a Cohort
              <br />
              <select name='cohorts' id='cohorts'>
                <option value="" ></option>
                <option value='10/10/10'>10/10/10</option>
        </select> 
      </label>
    </div>
  );
};

export default DropDown;

