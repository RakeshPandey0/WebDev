import React from "react";

const UserCard = (props) => {
  return (
    <div className="user-card">
      <img
        className="user-img"
        src={props.data.picture.medium}
        alt={`${props.data.name.first} profile`}
      />
      <h3>{props.data.name.first}</h3>
      <p>{props.data.phone}</p>
      <p>
        {props.data.location.city}, {props.data.location.state}
      </p>
    </div>
  );
};

export default UserCard;
