import React from "react";
function Dic(props){
    return(
    

        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.img}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
           {props.tel}
          </dd>
        </div>
        
      
 );
}
export default Dic;