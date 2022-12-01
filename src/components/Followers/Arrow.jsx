import React from "react";

/**
 * @author
 * @function Arrows
 **/

export const Arrows = ({ id, attributes, toWhomFollow }) => {
  const { following, followers } = attributes;

  const showBackwardArrow = followers?.data?.find(
    (user) => user.id === toWhomFollow.id
  );

  return (
    <div className="arrow-container">
      <div className="arrow forward-arrow">
        <div className="tip"></div>
      </div>
      {showBackwardArrow && (
        <div className="arrow backward-arrow">
          <div className="tip"></div>
        </div>
      )}
    </div>
  );
};
