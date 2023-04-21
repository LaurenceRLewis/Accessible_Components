import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

//Props
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
    <table className="tl-container-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="tl-header"
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
                className="tl-sub-header"
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
          <tr key={rowIndex} className="tl-raw-unfocus">
            {row.map((cell, cellIndex) => (
              //Expression
              <td
                key={cellIndex}
                className="tl-data"
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
