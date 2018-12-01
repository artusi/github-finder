import { fetchUser } from "../services/github-services";

const actions = {
  UPDATE_USERNAME: "github/update-user",
  ERROR: "github/error",
  LOADING: "github/loading"
};

export const defaultState = {
  username: "artusi",
  loading: false,
  error: ""
};

export function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case actions.UPDATE_USERNAME:
      return {
        ...state,
        usename: action.value
      };

    case actions.LOADING:
      return {
        ...state,
        loading: action.value
      };

    case actions.ERROR:
      return {
        ...state,
        error: action.value
      };

    default:
      return state;
  }
}

export default reducer;

export function updateUser(value) {
  return { type: actions.UPDATE_USERNAME, value };
}

export function loading(value) {
  return { type: actions.LOADING, value };
}

export function error(value) {
  return { type: actions.ERROR, value };
}

export function requestUserUpdate(username) {
  const newUsername = username || defaultState.username;

  return dispatch => {
    dispatch(loading(true));

    return fetchUser(newUsername).then(() => {
      dispatch(updateUser(newUsername));
      dispatch(loading(false));
    });
  };
}
