import React from "react";

/**
 * @author
 * @function User
 **/

export const User = ({ attributes, id }) => {
  const { firstName, lastName, email } = attributes;
  const username = `${firstName} ${lastName}`;

  return (
    <div className="user-item">
      <div className="user-avatar"></div>
      <div>
        <div>{username}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};
