import React from "react";
import { OptionSelect } from "../OptionSelect";

const initialProps = {
  id: "sortRepos",
  options: [
    { value: "name", label: "name" },
    { value: "updated", label: "updated" },
    { value: "stars", label: "stars" }
  ],
  customClassName: "",
  initialValue: "",
  disabled: false,
  onChange: jest.fn()
};

describe("<OptionSelect /> - render", () => {
  it("renders", () => {
    const wrapper = shallow(<OptionSelect {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with all props > customClassName | disabled", () => {
    const allProps = {
      ...initialProps,
      customClassName: "custom",
      initialValue: "updated",
      disabled: true
    };
    const wrapper = shallow(<OptionSelect {...allProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
