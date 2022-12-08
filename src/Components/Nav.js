import React from 'react';

import DropDown from './DropDown';


const Nav = ({history, cohortData, setCohortIndex, cohorts})=> {

    const handleRedirectToHomepage = () => {
        history.push(`/`)
        setCohortIndex("")
      };


    return(
        <div id="full-width">
            <h1 onClick={handleRedirectToHomepage}>Yearbook</h1>
            <h4>Select a cohort</h4>
                <DropDown 
                cohortData={cohorts} 
                setCohortIndex={setCohortIndex} 
                history={history} />
        </div>
    )
}

export default Nav;