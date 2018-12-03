import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import {
  SearchField,
  SubmitButton,
  RepoCard,
  Report,
  OptionSelect
} from "../app/ui";

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

storiesOf("OptionSelect", module).add("basic select", () => (
  <OptionSelect
    id="sortRepos"
    options={[
      { value: "name", label: "name" },
      { value: "updated", label: "updated" },
      { value: "stars", label: "stars" }
    ]}
    customClassName="test"
    initialValue="updated"
    onChange={action("changed")}
  />
));

storiesOf("Report", module).add("basic report with data", () => (
  <Report
    id="id"
    list={[
      {
        id: "row1",
        cells: [
          { content: "1 content", customClass: "1 class" },
          { content: "2 content", customClass: "2class" }
        ]
      },
      {
        id: "row2",
        cells: [
          { content: "1 content", customClass: "1 class" },
          { content: "2 content", customClass: "2class" }
        ]
      }
    ]}
  />
));
