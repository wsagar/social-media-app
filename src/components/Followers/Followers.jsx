import React, { useContext } from "react";
import { StateContext } from "../../contexts/context";
import "../common.css";
import { Arrows } from "./Arrow";
import "./Followers.css";
import { User } from "./User";
/**
 * @author
 * @function Followers
 **/

export const Followers = (props) => {
  const { users } = useContext(StateContext);
  return (
    <div className="follower-container">
      <div style={{ textAlign: "center" }}>
        <h3>User and their followers</h3>
      </div>
      <div className="users-container">
        {users.map((user) => {
          const { id, attributes } = user;
          const { followers, following } = attributes;
          {
            return following?.data?.map((toWhomFollowingUser) => {
              return (
                <div
                  className="follower-row"
                  key={toWhomFollowingUser.id.toString()}
                >
                  <div>
                    <User {...user} />
                  </div>
                  <div>
                    <Arrows {...user} toWhomFollow={toWhomFollowingUser} />
                  </div>
                  <div>
                    <User {...toWhomFollowingUser} />
                  </div>
                </div>
              );
            });
          }
        })}
      </div>
    </div>
  );
};
