import React from "react";
import { RepositoryInfo } from "../RepositoryInfo";

describe("<RepositoryInfo />", () => {
  it("renders", () => {
    const wrapper = shallow(
      <RepositoryInfo
        requestRepository={() => {}}
        username="artusi"
        repositoryName="another-repo"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders > with initial user", () => {
    const wrapper = shallow(
      <RepositoryInfo
        requestRepository={() => {}}
        username="artusi"
        repositoryName="another-repo"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
