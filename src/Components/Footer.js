import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import leftarrow from "../images/leftarrow.png"
import rightarrow from "../images/rightarrow.png"

const Footer = ({ setCohortIndex, cohortIndex, cohorts }) => {

 const [displayArrow, setDisplayArrow] = useState("")

//  const handleArrowDisplay = ()=>{
//     setDisplayArrow(!displayArrow)
//  }

  const history = useHistory();

  const handleGoBack = () => {
    setCohortIndex(Number(cohortIndex) - 1);  
    history.push(`/cohorts/${Number(cohortIndex) - 1}`) 
    if (cohortIndex === 2){
         history.push(`/`)
    } 
  };

  console.log('arrray' + cohorts.length)
  console.log('index ' + cohortIndex)

  const handleForward = () => {

   if(cohortIndex){ 
      setCohortIndex(Number(cohortIndex) + 1) ;
      history.push(`/cohorts/${Number(cohortIndex) + 1}`)
    }
    
    if(cohorts.length - 1 < cohortIndex) {
       setDisplayArrow(!displayArrow)
    }
  }

  return (
    <div id="footer">
      <div id="arrows">
        <img id="back-arrow" onClick={handleGoBack} style={{width: 50}} src={leftarrow} alt="back"/>
        <img id={displayArrow ? "forward-arrow-hide" : "forward-arrow" } onClick={handleForward} style={{width: 50}} src={rightarrow} alt="back"/>
      </div>
    </div>
  );
};

export default Footer;
