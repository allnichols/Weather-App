import React from 'react';
import styles from './Date.module.css';

var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              };
var prnDt = new Date().toLocaleTimeString('en-us', options);

const date = () => (
    <p className={styles.Date}>{prnDt}</p>
)

export default date;
