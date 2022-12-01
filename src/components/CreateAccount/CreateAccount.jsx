import React from "react";
import { Account } from "../../classes/account";
import SocialService from "../../services/social.service";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import "./CreateAccount.css";
/**
 * @author
 * @function CreateAccount
 **/

export const CreateAccount = (props) => {
  const [account, updateAccount] = React.useState(new Account());
  const [error, setError] = React.useState(null);
  const saveAccount = (event) => {
    event && event.preventDefault();
    const payload = { data: account };
    SocialService.createUser(payload)
      .then((response) => {
        if (response.status === 200) {
          //clearing or resetting account form
          updateAccount(new Account());
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setError(error?.message ?? error);
      });
  };

  const updateAccountDetails = (event) => {
    const { id, value } = event.target;
    updateAccount((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const closePopup = () => {
    setError(null);
  };

  return (
    <div className="account-form-container">
      {error && <ErrorPopup error={error} close={closePopup} />}
      <div>
        <h3>Create an account</h3>
      </div>
      <form onSubmit={saveAccount}>
        <div className="account-form">
          <div>
            <input
              className="firstname"
              placeholder="Firstname"
              id="firstName"
              value={account.firstName}
              onChange={updateAccountDetails}
              required
            />
          </div>
          <div>
            <input
              className="lastName"
              placeholder="Lastname"
              id="lastName"
              value={account.lastName}
              onChange={updateAccountDetails}
              required
            />
          </div>
          <div>
            <input
              className="email"
              placeholder="Email"
              id="email"
              value={account.email}
              onChange={updateAccountDetails}
              required
            />
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
