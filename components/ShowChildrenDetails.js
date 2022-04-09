import React from "react";
import { useEffect, useState } from "react";

import childrenDetails from "../services/childrenDetails";
import styles from "../styles/ShowChildrenDetails.module.css";

const ShowChildrenDetails = () => {
  const [childData, setChildData] = useState([]);

  const [child1, setChild] = useState("");

  useEffect(() => {
    childrenDetail();
  }, []);

  const childrenDetail = async () => {
    try {
      const response = await childrenDetails.getChildrenDetails();
      setChildData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const childrenName = (event) => {
    setChild(event.target.textContent);
  };

  const count = 0;
  const getSingleChild = childData.map((childData) => {
    if (count <= 0) {
      count += 1;
      return (
        <div key={childData.id}>
          <div className={styles.card_left}>
            <h3>Children</h3>
            <button className={styles.button} onClick={childrenName}>
              <span className={styles.button2}>{childData.first_name}</span>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div key={childData.id}>
          <div className={styles.card_left}>
            <button className={styles.button} onClick={childrenName}>
              <span className={styles.button2}>{childData.first_name}</span>
            </button>
          </div>
        </div>
      );
    }
  });

  const getChildrenDetail = childData.map((child) => {
    if (child1 === child.first_name) {
      return (
        <div key={child.id}>
          <h3>Details</h3>
          <div> First Name: {child.first_name}</div>
          <div> Last Name {child.last_name}</div>
          <div> Email: {child.email}</div>
          <div> Gender: {child.gender}</div>
        </div>
      );
    }
  });

  return (
    <div className={styles.card}>
      <div>{getSingleChild}</div>

      <div>{getChildrenDetail}</div>
    </div>
  );
};

export default ShowChildrenDetails;
