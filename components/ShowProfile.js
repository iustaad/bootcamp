import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "../styles/ShowProfile.module.css";
import user from "../services/user";

function ShowProfile() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    userLastLoginDetails();
  }, []);

  const userLastLoginDetails = async () => {
    try {
      const response = await user.getUserDetails();
      setUserDetails(response.data.users);
      // console.log(response.data.users);
      const userName = localStorage.getItem("username");
      if (userName == "admin") {
        // allUsersData();
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const userProfile = userDetails.map((user) => {
    const date = new Date(user.lastaccess * 1000);
    const lastAccess = date.toUTCString();
    const src = user.profileimageurl;

    return (
      <div key={user.id} className={styles.card}>
        <div className={styles.card_left}>
          <Image unoptimized={() => src} src={src} width={90} height={90} />
          <h2>{user.fullname}</h2>
        </div>
        <div className={styles.card_right}>
          <div className={styles.card_details}>
            <label>Username:&nbsp;</label>
            <p>{user.username}</p>
          </div>
          <div className={styles.card_details}>
            <label>Email:&nbsp;</label>
            <p>{user.email}</p>
          </div>
          <div className={styles.card_details}>
            <label>Last Login:&nbsp;</label>
            <p>{lastAccess}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div>{userProfile}</div>;
}

export default ShowProfile;
