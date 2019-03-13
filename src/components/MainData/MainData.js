import React from 'react';
import styles from './MainData.module.css';


const mainData = (props) => {


  return(

    <div className={styles.MainCard}>
        <p>{props.place}</p>
        <p>{props.temp} °F</p>
    </div>

  )
}

export default mainData;
