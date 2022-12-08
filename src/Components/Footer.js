import React from 'react';



const Footer =({cohorts})=> {

    const cohortList = cohorts.map((cohort) => {
        return( <p>{cohort.region}: {cohort.start_date}</p>)
    })

    return(
        <div id='footer'>
            <h1>Footer!</h1>
            {cohortList}

        </div>
    )
}

export default Footer;