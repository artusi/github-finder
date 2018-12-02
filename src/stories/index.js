import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import { SearchField, SubmitButton } from "../app/ui";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("SearchField")} />
));

storiesOf("SubmitButton", module).add("basic submit button", () => (
  <SubmitButton onClick={action("clicked")}>SubmitButton Button</SubmitButton>
));

storiesOf("SearchField", module).add("basic search field", () => (
  <SearchField
    id="MySearchField"
    onClick={action("clicked")}
    label="Search this"
  />
));

storiesOf("RepoCard", module)
  .add("repository card description", () => (
    <RepoCard id="repoCard" title="My repo title" />
  ))
  .add("repository card description all props", () => (
    <RepoCard
      id="repoCard"
      title="My repo title"
      description="Lololo lol lo lo lo lo lo "
      customClassName="customClass"
      stars={10}
    />
  ));
