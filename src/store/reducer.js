import { SocialMediaActions } from "./action";
export const Actions = {
  none: "NONE",
  busy: "BUSY",
  error: "ERROR",
  success: "SUCCESS",
};
export const initalState = {
  users: [],
  actions: {
    users: Actions.none,
  },
};
export default function socialMediaReducer(state, action) {
  switch (action.type) {
    case SocialMediaActions.fetchingUsers: {
      return {
        ...state,
        actions: {
          ...state.actions,
          users: Actions.busy,
        },
      };
    }
    case SocialMediaActions.storeUsers: {
      return {
        ...state,
        users: action.payload,
        actions: {
          ...state.actions,
          users: Actions.success,
        },
      };
    }
    case SocialMediaActions.fetchUserFailure: {
      return {
        ...state,
        actions: {
          ...state.actions,
          users: Actions.error,
        },
      };
    }
    default:
      return { ...state };
  }
}
