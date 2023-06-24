import React from "react";
import PropTypes from "prop-types";
import styles from './ReactTableSubHeader.module.css';

const ReactTableSubHeader = ({
  colspan,
  subColspan,
  headers,
  data,
  headerBackgroundColor,
  headerTextColor,
  tdFontWeight,
}) => {
  return (
    <table className={styles.containerTable}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className={styles.header}
              id={header.id}
              colSpan={colspan[index] > 1 ? colspan[index] : undefined}
              style={{
                backgroundColor: headerBackgroundColor,
                color: headerTextColor,
              }}
            >
              {header.name}
            </th>
          ))}
        </tr>
        <tr>
          {headers.map((header, index) =>
            subColspan[index] > 0 && colspan[index] !== 1 ? (
              <th
                key={index}
                className={styles.subHeader}
                headers={header.id}
                colSpan={subColspan[index]}
              >
                {header.subName}
              </th>
            ) : null
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.rawUnfocus}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={styles.data}
                style={{ fontWeight: tdFontWeight }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ReactTableSubHeader.propTypes = {
  colspan: PropTypes.arrayOf(PropTypes.number).isRequired,
  subColspan: PropTypes.arrayOf(PropTypes.number).isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      subName: PropTypes.string,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  headerBackgroundColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  tdFontWeight: PropTypes.oneOf([400, 700]),
};

ReactTableSubHeader.defaultProps = {
  headerBackgroundColor: "inherit",
  headerTextColor: "inherit",
  tdFontWeight: 400,
};

export default ReactTableSubHeader;