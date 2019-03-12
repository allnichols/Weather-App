import React from 'react';


const mainData = (props) => {


  return(

    <div>
        <p>{props.place}</p>
        <p>{props.description}</p>
        <p>{props.temp} °F</p>
    </div>

  )
}

export default mainData;
