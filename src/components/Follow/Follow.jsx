import React, { useContext, useEffect, useState } from "react";
import SocialService from "../../services/social.service";
import { DispatchContext, StateContext } from "../../contexts/context";
import { SocialMediaActions } from "../../store/action";
import "../common.css";
import "./Follow.css";
/**
 * @author
 * @function Follow
 **/

export const Follow = (props) => {
  const dispatch = useContext(DispatchContext);
  const { users } = useContext(StateContext);
  const [followForm, updateFollowForm] = useState({
    follower: "",
    toWhomFollow: "",
  });

  const followNow = (event) => {
    event && event.preventDefault();
    SocialService.addFollowup(followForm)
      .then((response) => {
        if (response.status === 200) {
          updateFollowForm({
            follower: "",
            toWhomFollow: "",
          });
          fetchUsers();
        }
      })
      .catch((error) => {});
  };

  const fetchUsers = () => {
    dispatch({ type: SocialMediaActions.fetchingUsers });
    SocialService.fetchUsers()
      .then((response) => {
        dispatch({
          type: SocialMediaActions.storeUsers,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: SocialMediaActions.fetchUserFailure });
      });
  };

  useEffect(() => {
    //fetch users api call && dispatch action store users
    fetchUsers();
  }, []);

  const handleSelection = (event) => {
    updateFollowForm((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <div className="follow-up-container">
      <div>
        <h3>Follow now</h3>
      </div>
      <form onSubmit={followNow}>
        <div className="follow-up-form">
          <div>
            <label>Select User</label>
            <select
              placeholder="Select user"
              value={followForm.follower}
              onChange={handleSelection}
              id="follower"
            >
              <option value="">Select user</option>
              {users &&
                users
                  .filter((user) => user.id != followForm.toWhomFollow)
                  .map((user) => {
                    const { firstName, lastName, email } = user.attributes;
                    return (
                      <option
                        key={email}
                        value={user.id}
                      >{`${firstName} ${lastName}`}</option>
                    );
                  })}
            </select>
          </div>
          <div>
            <label>Following To</label>
            <select
              placeholder="Select user"
              value={followForm.toWhomFollow}
              onChange={handleSelection}
              id="toWhomFollow"
            >
              <option value="">Select user to whom follow</option>
              {users &&
                users
                  .filter((user) => user.id != followForm.follower)
                  .map((user, index) => {
                    const { firstName, lastName, email } = user.attributes;
                    return (
                      <option
                        value={user.id}
                        key={email}
                      >{`${firstName} ${lastName}`}</option>
                    );
                  })}
            </select>
          </div>
        </div>
        <div>
          <button>Follow</button>
        </div>
      </form>
    </div>
  );
};
