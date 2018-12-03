import React from "react";
import { RepoInfo } from "../RepoInfo";

describe("<RepoInfo />", () => {
  it("renders", () => {
    const wrapper = shallow(
      <RepoInfo
        requestRepository={() => {}}
        username="artusi"
        repositoryName="another-repo"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders > with initial user", () => {
    const wrapper = shallow(
      <RepoInfo
        requestRepository={() => {}}
        username="artusi"
        repositoryName="another-repo"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
