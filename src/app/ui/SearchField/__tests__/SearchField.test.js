import React from "react";
import { SearchField } from "../SearchField";

const initialProps = {
  id: "searchTest",
  onClick: jest.fn(),
  label: "Test label for the glory"
};

describe("<SearchField /> - render", () => {
  it("renders", () => {
    const wrapper = shallow(<SearchField {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with all props > prefix | defaultValue", () => {
    const allProps = {
      ...initialProps,
      prefix: "http://youtube.com/",
      defaultValue: "mkbhd"
    };
    const wrapper = shallow(<SearchField {...allProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("<SearchField /> - interactions", () => {
  it("Searching for something", () => {
    const simulateClick = jest.fn();

    const wrapper = shallow(
      <SearchField {...initialProps} onClick={simulateClick} />
    );

    wrapper
      .find("#searchTest-input")
      .simulate("change", { target: { name: "searchTest", value: "artusi" } });

    expect(wrapper.state("field").value).toEqual("artusi");

    wrapper.find("#submitSearchField").simulate("click");

    expect(simulateClick).toBeCalled();
  });

  it("Try to search without adding input", () => {
    const simulateClickAgain = jest.fn();

    const wrapper = shallow(
      <SearchField {...initialProps} onClick={simulateClickAgain} />
    );

    wrapper.find("#submitSearchField").simulate("click");

    expect(simulateClickAgain).not.toBeCalled();
  });
});
