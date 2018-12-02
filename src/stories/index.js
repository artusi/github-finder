import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import { SearchField, SubmitButton } from "../app/ui";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("SearchField")} />
));

storiesOf("SubmitButton", module).add("with text", () => (
  <SubmitButton onClick={action("clicked")}>SubmitButton Button</SubmitButton>
));

storiesOf("SearchField", module).add("with text", () => (
  <SearchField
    id="MySearchField"
    onClick={action("clicked")}
    label="Search this"
  />
));
