import React from "react";
import Router from "../Router";

describe("<Router />", () => {
  const routes = [
    {
      path: "/",
      exact: true,
      component: () => <span>Test</span>
    },
    {
      path: "/test-route",
      component: () => <span>Test2</span>
    },
    {
      path: "/test-another-route",
      component: () => <span>Test2</span>
    }
  ];

  it("renders > empty", () => {
    const wrapper = shallow(<Router routes={[]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders > list", () => {
    const wrapper = shallow(<Router routes={routes} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders > list with children", () => {
    const wrapper = shallow(
      <Router routes={routes}>
        <span />
      </Router>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
