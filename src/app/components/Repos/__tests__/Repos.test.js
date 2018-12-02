import React from "react";
import { Repos } from "../Repos";

describe("<Repos />", () => {
  const initialProps = {
    github: {
      error: false,
      username: "Vegeta",
      repos: {
        total: 2,
        all: ["4521396", "58581481"],
        byId: {
          "4521396": {
            id: "4521396",
            name: "jclip d asdnlkasdkas dlaks dlkas dlkas d lkda",
            description:
              'JClip is a new way to make animations and control jpegs, you can use as a "gif" file or control like a Flash Movieclip.',
            language: "JavaScript",
            stars: 1
          },
          "58581481": {
            id: "58581481",
            name: "git-alias",
            description: "Some tests with alias",
            language: "Not declared",
            stars: 0
          }
        }
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
