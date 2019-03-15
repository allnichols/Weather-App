import React from 'react';
import styles from './Date.module.css';

var options = {
                weekday: 'long',
                hour:'2-digit',
                minute:'2-digit'
                                };
var prnDt = new Date().toLocaleTimeString('en-us', options);

const date = () => (
    <p className={styles.Date}>{prnDt}</p>
)

export default date;
