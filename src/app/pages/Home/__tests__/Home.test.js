import React from "react";
import { Home } from "../Home";

describe("<Home />", () => {
  it("renders", () => {
    const wrapper = shallow(<Home match={{ params: {} }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
