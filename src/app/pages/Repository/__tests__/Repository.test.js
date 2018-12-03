import React from "react";
import { Repository } from "../Repository";

describe("<Repository />", () => {
  it("renders", () => {
    const wrapper = shallow(
      <Repository
        history={{}}
        match={{ params: { username: "artusi", repository: "git-finder" } }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
