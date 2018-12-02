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
      username: "artusi",
      repos: {
        total: 5,
        list: [{}, {}, {}, {}, {}]
      }
    };

    deepFreeze(stateBefore);

    expect(
      reducer(
        stateBefore,
        bundle.updateUser({
          username: "artusi",
          repos: {
            total: 5,
            list: [{}, {}, {}, {}, {}]
          }
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
