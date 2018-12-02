import { fetchUser } from "../services/github-services";

const actions = {
  POPULATE_REPOS: "github/populate-repositories",
  UPDATE_USER: "github/update-user",
  ERROR: "github/error",
  LOADING: "github/loading"
};

export const defaultState = {
  username: "",
  repos: {
    total: 0,
    byId: {},
    all: []
  },
  loading: false,
  error: false
};

export function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case actions.UPDATE_USER:
      return {
        ...state,
        username: action.value,
        error: false
      };

    case actions.POPULATE_REPOS:
      return {
        ...state,
        repos: { ...action.value },
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
export function populateRepos(value) {
  return { type: actions.POPULATE_REPOS, value };
}

export function loading(value) {
  return { type: actions.LOADING, value };
}

export function error(value) {
  return { type: actions.ERROR, value };
}

// Normalizer
const reposNormalizer = data => {
  const total = data.length;

  // List by name
  const all = data.reduce((list, current) => {
    list.push(current.id.toString());
    return list;
  }, []);

  // Add only usable information
  const byId = data.reduce((list, current) => {
    // eslint-disable-next-line camelcase
    const { id, name, description, language, stargazers_count } = current;
    // eslint-disable-next-line no-param-reassign, camelcase
    list[id] = {
      id: id.toString(),
      name,
      description,
      language: language || "Not declared",
      stars: stargazers_count
    };
    return list;
  }, {});

  return { total, all, byId };
};

// Requests

export function requestUserUpdate(username) {
  const newUsername = username;

  return dispatch => {
    dispatch(loading(true));

    return fetchUser(newUsername).then(data => {
      if (data && data.message) {
        dispatch(error(true));
      } else {
        dispatch(populateRepos(reposNormalizer(data)));
        dispatch(updateUser(newUsername));
      }
      dispatch(loading(false));
    });
  };
}
