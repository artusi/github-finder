import React from "react";
import { FindUser } from "../FindUser";

describe("<FindUser />", () => {
  it("renders", () => {
    const wrapper = shallow(
      <FindUser requestUserUpdate={() => {}} onUpdateUser={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders > with initial user", () => {
    const wrapper = shallow(
      <FindUser
        requestUserUpdate={() => {}}
        onUpdateUser={() => {}}
        initialUser="kakaroto"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
