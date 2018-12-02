import { fetchUser } from "../services/github-services";

const actions = {
  UPDATE_USER: "github/update-user",
  ERROR: "github/error",
  LOADING: "github/loading"
};

export const defaultState = {
  username: "artusi",
  repos: {
    total: 0,
    list: []
  },
  loading: false,
  error: false
};

export function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case actions.UPDATE_USER:
      return {
        ...state,
        username: action.value.username,
        repos: { ...action.value.repos },
        error: false
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
  return { type: actions.UPDATE_USER, value };
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

    return fetchUser(newUsername).then(data => {
      if (data && data.message === "Not Found") {
        dispatch(error(true));
      } else {
        // parse data
        const normalized = {
          repos: {
            total: data.length,
            list: data
          },
          username: newUsername
        };

        dispatch(updateUser(normalized));
      }
      dispatch(loading(false));
    });
  };
}
