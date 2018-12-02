import React from "react";
import { SubmitButton } from "../SubmitButton";

const initialProps = {
  id: "submitButton",
  onClick: jest.fn()
};

describe("<SubmitButton /> - render", () => {
  it("renders", () => {
    const wrapper = shallow(
      <SubmitButton {...initialProps}>Test submit</SubmitButton>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with all props > customClassName | disabled", () => {
    const allProps = {
      ...initialProps,
      customClassName: "lol-my-class",
      disabled: true
    };
    const wrapper = shallow(
      <SubmitButton {...allProps}>Test submit</SubmitButton>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe("<SubmitButton /> - interactions", () => {
  it("Searching for something", () => {
    const simulateClick = jest.fn();

    const wrapper = shallow(
      <SubmitButton {...initialProps} onClick={simulateClick}>
        Test submit
      </SubmitButton>
    );

    wrapper.find("#submitButton").simulate("click");

    expect(simulateClick).toBeCalled();
  });
});
