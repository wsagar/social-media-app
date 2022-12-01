import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { DispatchContext, StateContext } from "./contexts/context";
import { CreateAccount } from "./components/CreateAccount/CreateAccount";
import { Follow } from "./components/Follow/Follow";
import { Followers } from "./components/Followers/Followers";
import socialMediaReducer, { Actions, initalState } from "./store/reducer";
import Loader from "./components/Loader/Loader";

function App() {
  const [state, dispatch] = React.useReducer(socialMediaReducer, initalState);

  const showLoader = state.actions.users === Actions.busy;

  return (
    <div className="social-media-page">
      {showLoader && <Loader />}
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <div>
            <CreateAccount />
          </div>
          <div>
            <Follow />
          </div>
          <div>
            <Followers />
          </div>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
