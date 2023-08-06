import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import time from "../../assets/timeStamps.json"

import { useState } from "react";
const List = ({ rows,currency ,selectedOrderDetails,setSelectedOrderDetails,selectedOrderTimeStamps,setSelectedOrderTimeStamps,searchText,variant="container"}) => {


  rows?.map((value)=>Object.assign(value,time.results.find((item)=>item["&id"]===value["&id"])));

  const list = rows?.filter((value)=>value["&id"].toLowerCase().includes(searchText));

  return (
    <table className={styles[variant]}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>{`Order Volume / ${currency}`}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {list?list?.map((row,index) => (
          <ListRow key={index} value={row} selectedOrderDetails={selectedOrderDetails} setSelectedOrderDetails={setSelectedOrderDetails} selectedOrderTimeStamps={selectedOrderTimeStamps} setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListRow>
        )):rows?.map((row) => (
          <ListRow key={row["&id"]} value={row} selectedOrderDetails={selectedOrderDetails} setSelectedOrderDetails={setSelectedOrderDetails} selectedOrderTimeStamps={selectedOrderTimeStamps} setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;