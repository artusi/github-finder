import React from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestIncrementCommits } from "store/state/github";
import { Report } from "ui";
import { commitReportParser } from "./parser";
import styles from "./CommitsList.module.css";

export function CommitsList({ onScrollLoad, hasMore, page, commits, error }) {
  const errorMessage = "Sorry but we couldn't find this user or repository ;-(";
  if (error) return <div className={styles.commitsList}>{errorMessage}</div>;

  const parsed = commits.list.map((item, index) => ({
    id: item.id + index,
    cells: commitReportParser(item, styles)
  }));
  const basicLoader =
    page === 1 ? null : (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );

  return (
    <div className={styles.commitsList}>
      <p>List of commits:</p>
      <div className={styles.commitsReport}>
        <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={onScrollLoad}
          hasMore={hasMore}
          loader={basicLoader}
        >
          <Report id="commits-report" list={parsed} />
        </InfiniteScroll>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  hasMore: state.github.currentRepo.hasMore,
  page: state.github.currentRepo.page,
  commits: state.github.currentRepo.commits,
  error: state.github.error
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onScrollLoad: requestIncrementCommits
    },
    dispatch
  );
}

CommitsList.propTypes = {
  commits: PropTypes.shape({
    total: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired
  }).isRequired,
  error: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  onScrollLoad: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommitsList);
