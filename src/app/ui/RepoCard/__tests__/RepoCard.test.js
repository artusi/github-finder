import React from "react";
import { RepoCard } from "../RepoCard";

const initialProps = {
  id: "id",
  title: "My awesome repo"
};

describe("<RepoCard /> - render", () => {
  it("renders", () => {
    const wrapper = shallow(<RepoCard {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with all props > prefix | defaultValue", () => {
    const allProps = {
      ...initialProps,
      description: "Lololo lol lo lo lo lo lo ",
      customClassName: "customClass",
      stars: 10
    };
    const wrapper = shallow(<RepoCard {...allProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
