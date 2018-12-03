import { fetchUser, fetchRepositoryCommits } from "../services/github-services";

const actions = {
  POPULATE_COMMITS: "github/populate-commits",
  POPULATE_REPOS: "github/populate-repositories",
  UPDATE_SORT: "github/update-sort",
  UPDATE_USER: "github/update-user",
  ERROR: "github/error",
  LOADING: "github/loading"
};

export const defaultState = {
  username: "",
  sort: "name",
  repos: {
    total: 0,
    byId: {},
    all: []
  },
  currentRepo: {
    name: "",
    commits: {
      total: 0,
      list: []
    }
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
    case actions.UPDATE_SORT:
      return {
        ...state,
        sort: action.value,
        error: false
      };

    case actions.POPULATE_REPOS:
      return {
        ...state,
        repos: { ...action.value },
        error: false
      };

    case actions.POPULATE_COMMITS:
      return {
        ...state,
        currentRepo: { ...action.value },
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

export function updateSort(value) {
  return { type: actions.UPDATE_SORT, value };
}

export function populateRepos(value) {
  return { type: actions.POPULATE_REPOS, value };
}

export function populateCommits(value) {
  return { type: actions.POPULATE_COMMITS, value };
}

export function populateCommit(value) {
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

const commitsNormalizer = data => {
  const total = data.length;

  const list = data.reduce((commitList, current) => {
    // eslint-disable-next-line camelcase
    const id = current.sha;
    const { author, message } = current.commit;
    // eslint-disable-next-line no-param-reassign, camelcase
    commitList.push({
      id,
      description: message,
      author: author.name,
      url: current.html_url
    });
    return commitList;
  }, []);

  return { total, list };
};

// Requests
export function requestUserUpdate(username) {
  const newUsername = username;

  return (dispatch, getState) => {
    dispatch(loading(true));

    const { sort } = getState().github;

    return fetchUser(newUsername, sort).then(data => {
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

// Requests
export function requestSortUpdate(sort) {
  return (dispatch, getState) => {
    const { username } = getState().github;

    dispatch(loading(true));
    dispatch(updateSort(sort));
    // Request list from github again ( could sort by myself but this is more relieable)
    dispatch(requestUserUpdate(username));
  };
}

export function requestRepository(githubUser, repoName) {
  return (dispatch, getState) => {
    dispatch(loading(true));
    dispatch(populateCommits(defaultState.currentRepo));

    return fetchRepositoryCommits(githubUser, repoName).then(data => {
      if (data && data.message) {
        dispatch(error(true));
      } else {
        // No gitUser or different user
        const { username } = getState().github;
        if (!username || username !== githubUser) {
          dispatch(updateUser(githubUser));
        }

        // Set current repo
        const currentRepo = {
          name: repoName,
          commits: commitsNormalizer(data)
        };

        dispatch(populateCommits(currentRepo));
      }
      dispatch(loading(false));
    });
  };
}
