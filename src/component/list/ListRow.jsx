import styles from "./ListRow.module.css";
import react, { useState } from 'react';
import data from '../../assets/data.json';
const ListCell = ({ children,selectedOrderDetails,setSelectedOrderDetails,selectedOrderTimeStamps,setSelectedOrderTimeStamps,value }) => {
  const handleData = ()=>{
    setSelectedOrderDetails(value.executionDetails);
    setSelectedOrderTimeStamps(value.timestamps);    
  }
  return<tr className={styles.cell} onClick={handleData}>
    {children}
  </tr>;
};

export default ListCell;