import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestSortUpdate } from "store/state/github";
import { RepoCard, OptionSelect } from "ui";
import styles from "./Repos.module.css";

// eslint-disable-next-line no-shadow
export function Repos({ github, requestSortUpdate }) {
  const { error, username, repos } = github;
  const { byId, all } = repos;
  const errorMessage = "Sorry but we couldn't find this user ;-(";

  if (error) return <div className={styles.repos}>{errorMessage}</div>;

  const sortOptions = [
    { value: "full_name", label: "Name" },
    { value: "updated", label: "Updated" },
    { value: "created", label: "Created" }
  ];

  return (
    <div className={styles.repos}>
      <div className={styles.disclamer}>
        <div className={styles.info}>
          Hey, {username} has {repos.total} repositories.
        </div>
        <div className={styles.sorter}>
          Sort by:
          <OptionSelect
            id="sortRepos"
            options={sortOptions}
            onChange={value => {
              requestSortUpdate(value);
            }}
          />
        </div>
      </div>
      <div className={styles.reposList}>
        {all.map(id => {
          const currentRepo = byId[id];
          const title = currentRepo.name;
          return (
            <div key={currentRepo.id} className={styles.reposListItem}>
              <RepoCard
                {...currentRepo}
                title={title}
                linkFinderPath={`${username}/${title}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  github: state.github
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestSortUpdate
    },
    dispatch
  );
}

Repos.propTypes = {
  requestSortUpdate: PropTypes.func.isRequired,
  github: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    repos: PropTypes.object.isRequired
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
