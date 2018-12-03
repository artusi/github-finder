import React from "react";

export const commitReportParser = (commit, styles) => {
  const commitIdCell = {
    customClass: styles.idCell,
    content: (
      <a
        href={commit.url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Go to commit -> ${commit.id}`}
      >
        {commit.id.substring(0, 10)}
      </a>
    )
  };
  const commitDescriptionCell = {
    customClass: styles.descriptionCell,
    content: commit.description
  };
  const commitAuthorCell = {
    customClass: styles.authorCell,
    content: commit.author
  };
  return [commitIdCell, commitDescriptionCell, commitAuthorCell];
};

export default commitReportParser;
