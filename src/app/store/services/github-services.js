// import fetch from "isomorphic-fetch";
// import { requestRepos } from "./mock/mock-github-api";

const gitHubApi = "https://api.github.com/";

export function fetchUser(username) {
  const url = encodeURI(`${gitHubApi}users/${username}/repos?per_page=100`);

  // return requestRepos(url);

  return fetch(url)
    .then(data => data.json())
    .catch(() => null);
}

export function fetchRepoCommits() {
  // Todo
}
