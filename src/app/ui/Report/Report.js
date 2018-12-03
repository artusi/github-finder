import React from "react";
import PropTypes from "prop-types";
import styles from "./Report.module.css";

export function Report({ id, customClassName, list }) {
  if (!list.length) return null;

  return (
    <table
      id={`report-${id}`}
      className={`${styles.report} ${customClassName}`}
    >
      <tbody>
        {list.map(item => {
          const rowId = item.id;
          return (
            <tr key={rowId} className={`${styles.row} ${item.customClass}`}>
              {item.cells.map((cell, index) => {
                const cellKey = rowId + index;
                return (
                  <td
                    className={`${styles.cell} ${cell.customClass}`}
                    key={cellKey}
                  >
                    {cell.content}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Report.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  customClassName: PropTypes.string
};

Report.defaultProps = {
  customClassName: ""
};

export default Report;
