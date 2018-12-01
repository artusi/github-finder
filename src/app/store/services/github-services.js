import fetch from "isomorphic-fetch";

const gitHubApi = "https://api.github.com/";

export function fetchUser(username) {
  const url = encodeURI(`${gitHubApi}users/${username}/repos?per_page=100`);

  return fetch(url)
    .then(data => data.json())
    .catch(() => null);
}

export function fetchRepoCommits() {
  // Todo
}
