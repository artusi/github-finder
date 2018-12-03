import React from "react";
import { Report } from "../Report";

const initialProps = {
  id: "id",
  list: []
};

describe("<Report /> - render", () => {
  it("renders", () => {
    const wrapper = shallow(<Report {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with all props > prefix | defaultValue", () => {
    const allProps = {
      id: "id",
      list: [
        {
          id: "row1",
          cells: [
            { content: "1 content", customClass: "1 class" },
            { content: "2 content", customClass: "2class" }
          ]
        }
      ]
    };
    const wrapper = shallow(<Report {...allProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
