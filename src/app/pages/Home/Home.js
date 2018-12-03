import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "components/Header";
import FindUser from "components/FindUser";
import RepositoriesList from "components/RepositoriesList";
import styles from "./Home.module.css";

export class Home extends Component {
  constructor() {
    super();
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(username) {
    this.props.history.push(`/${username}`);
  }

  render() {
    const { params } = this.props.match;
    const initialUser = params.username || "artusi";

    return (
      <div className={styles.home}>
        <Header />
        <FindUser initialUser={initialUser} onUpdateUser={this.onUpdateUser} />
        <div className={styles.reposWrapper}>
          <RepositoriesList />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};

Home.defaultProps = {
  history: {},
  match: {}
};

export default Home;
