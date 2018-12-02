import React from "react";
import { Repos } from "../Repos";

describe("<Repos />", () => {
  const initialProps = {
    github: {
      error: false,
      username: "Vegeta",
      repos: {
        total: 10,
        list: []
      }
    }
  };

  it("renders", () => {
    const wrapper = shallow(<Repos {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders > with initial user", () => {
    const propsWithError = { ...initialProps };
    propsWithError.github.error = true;

    const wrapper = shallow(<Repos {...propsWithError} />);

    expect(wrapper).toMatchSnapshot();
  });
});
