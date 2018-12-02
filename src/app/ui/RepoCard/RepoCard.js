import React from "react";
import PropTypes from "prop-types";
import styles from "./RepoCard.module.css";

export function RepoCard({
  id,
  customClassName,
  title,
  description,
  language,
  stars
}) {
  return (
    <div
      id={`repoCard-${id}`}
      className={`${styles.repoCard} ${customClassName}`}
    >
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.footer}>
        <ul className={styles.attributes}>
          <li className={styles.attributeItem}>
            <span className={styles.footerTitle}>Language: </span>
            {language}
          </li>
          <li className={styles.attributeItem}>
            <span className={styles.footerTitle}>Stars: </span>
            {stars}
          </li>
        </ul>
      </div>
    </div>
  );
}

RepoCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string,
  stars: PropTypes.number,
  customClassName: PropTypes.string
};

RepoCard.defaultProps = {
  customClassName: "",
  description: "",
  language: "",
  stars: 0
};

export default RepoCard;
