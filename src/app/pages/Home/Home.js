import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "components/Header";
import FindUser from "components/FindUser";
import Repos from "components/Repos";
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
          <Repos />
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
