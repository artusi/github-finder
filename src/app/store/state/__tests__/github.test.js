import deepFreeze from "deep-freeze";
import * as bundle from "../github";

const { defaultState, reducer } = bundle;

describe("github > actions", () => {
  it("returns the default state", () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it("UPDATE_USER", () => {
    const stateBefore = {
      ...defaultState
    };

    const stateAfter = {
      ...defaultState,
      username: "artusi"
    };

    deepFreeze(stateBefore);

    expect(reducer(stateBefore, bundle.updateUser("artusi"))).toEqual(
      stateAfter
    );
  });

  it("POPULATE_REPOS", () => {
    const stateBefore = {
      ...defaultState
    };

    const stateAfter = {
      ...defaultState,
      repos: {
        total: 2,
        byId: {
          "1": {
            id: "1",
            name: "one",
            description: "one d",
            language: "",
            stargazers_count: 1
          },
          "2": {
            id: "2",
            name: "two",
            description: "two d",
            language: "js",
            stargazers_count: 0
          }
        },
        all: ["1", "2"]
      }
    };

    deepFreeze(stateBefore);

    expect(
      reducer(
        stateBefore,
        bundle.populateRepos({
          total: 2,
          byId: {
            "1": {
              id: "1",
              name: "one",
              description: "one d",
              language: "",
              stargazers_count: 1
            },
            "2": {
              id: "2",
              name: "two",
              description: "two d",
              language: "js",
              stargazers_count: 0
            }
          },
          all: ["1", "2"]
        })
      )
    ).toEqual(stateAfter);
  });

  it("LOADING", () => {
    const stateBefore = {
      ...defaultState
    };

    const stateAfter = {
      ...defaultState,
      loading: true
    };

    deepFreeze(stateBefore);

    expect(reducer(stateBefore, bundle.loading(true))).toEqual(stateAfter);
  });

  it("ERROR", () => {
    const stateBefore = {
      ...defaultState
    };

    const stateAfter = {
      ...defaultState,
      error: "The cat went to the roof"
    };

    deepFreeze(stateBefore);

    expect(
      reducer(stateBefore, bundle.error("The cat went to the roof"))
    ).toEqual(stateAfter);
  });
});
