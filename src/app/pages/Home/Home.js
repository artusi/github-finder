import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Header from "components/Header";
import { requestUserUpdate } from "store/state/github";
import { SearchField } from "ui";
import styles from "./Home.module.css";

export class Home extends Component {
  componentDidMount() {
    this.props.requestUserUpdate();
  }

  render() {
    return (
      <div className={styles.home}>
        <Header />
        <div className={styles.searchWrapper}>
          <div className={styles.searchUser}>
            <SearchField
              id="searchUser"
              onClick={() => {}}
              prefix="https://github.com/"
              label="Search a GitHub user:"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  github: state.github
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestUserUpdate
    },
    dispatch
  );
}

Home.propTypes = {
  requestUserUpdate: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
