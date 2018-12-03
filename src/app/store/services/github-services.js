import fetch from "isomorphic-fetch";

const gitHubApi = "https://api.github.com/";
// TODO: This key should be handle by the server not here
const key = "a7b8864a2af23c351ae0a50bc9aa3adc57810b8b";

export function fetchUser(username, sortBy) {
  const url = encodeURI(
    `${gitHubApi}users/${username}/repos?per_page=100&sort=${sortBy}&access_token=${key}`
  );

  return fetch(url)
    .then(data => data.json())
    .catch(() => null);
}

export function fetchRepositoryCommits(username, repoName, page = 1) {
  const url = encodeURI(
    `${gitHubApi}repos/${username}/${repoName}/commits?page=${page}&per_page=50&access_token=${key}`
  );

  return fetch(url)
    .then(data => data.json())
    .catch(() => null);
}
