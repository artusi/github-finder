import React from "react";
import PropTypes from "prop-types";
import Header from "components/Header";
import RepoInfo from "components/RepoInfo";
import CommitsList from "components/CommitsList";
import { SubmitButton } from "ui";
import styles from "./Repository.module.css";

export function Repository(props) {
  const { params } = props.match;

  return (
    <div className={styles.repository}>
      <Header />
      <div className={styles.info}>
        <RepoInfo
          username={params.username}
          repositoryName={params.repository}
        />
        <SubmitButton
          id="btnReturnToListRepo"
          onClick={() => {
            props.history.push(`/${params.username}`);
          }}
        >
          Voltar
        </SubmitButton>
      </div>
      <div className={styles.report}>
        <CommitsList />
      </div>
    </div>
  );
}

Repository.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Repository;
