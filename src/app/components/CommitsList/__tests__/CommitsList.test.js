import React from "react";
import { CommitsList } from "../CommitsList";

describe("<CommitsList />", () => {
  const initialProps = {
    error: false,
    commits: {
      total: 2,
      list: [
        {
          id: "e3eff3dc09b004a45aeb19db66d403a482163922",
          description:
            "Merge pull request #3 from adriancmiranda/patch-1\n\nUpdate README.md",
          author: "Rafael Artusi",
          url:
            "https://github.com/artusi/jclip/commit/e3eff3dc09b004a45aeb19db66d403a482163922"
        },
        {
          id: "2bb637c960af94a9c5436849a3aa73dfdf36fc88",
          description: "Update README.md",
          author: "Adrian Miranda",
          url:
            "https://github.com/artusi/jclip/commit/2bb637c960af94a9c5436849a3aa73dfdf36fc88"
        }
      ]
    }
  };

  it("renders", () => {
    const wrapper = shallow(<CommitsList {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
