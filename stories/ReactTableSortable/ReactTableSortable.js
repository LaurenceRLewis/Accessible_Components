import React, { useState, useCallback, useEffect } from "react";
import styles from "./ReactTableSortable.module.css";

export const ReactTableSortable = ({
  sortable = "Sort",
  includeScope = true,
  addRoleStatus = false,
  iconVisibility = "Show on hover / focus",
  customCaptionText = "Table sorted by, ",
  initialSortColumnID = null,
}) => {
  // Initialize tableData with initial data.
  const [tableData, setTableData] = useState([
    [
      "P4",
      "TNC000131015",
      "Alok Nagar",
      "Infrastructure Upgrade",
      "In Progress",
      "Chennai",
      "Sampark Technologies",
      "30 Aug 2022 10am",
      "Rahul Varma",
    ],
    [
      "P3",
      "TNC000119453",
      "Pratap Enclave",
      "Network Expansion",
      "Completed",
      "Kolkata",
      "FastNet Communications",
      "13 Jul 2022 3pm",
      "Aditi Chatterjee",
    ],
    [
      "P2",
      "TNC000254981",
      "Kima",
      "Database migration",
      "In Progress",
      "London",
      "Michael Brown",
      "18 Oct 2022 9am",
      "David Johnson",
    ],
    [
      "P1",
      "TNC000325789",
      "Zara",
      "Frontend refactoring",
      "Not Started",
      "Tokyo",
      "Lisa White",
      "10 Nov 2022 11am",
      "Emily Green",
    ],
    [
      "P4",
      "TNC000411568",
      "Xeno",
      "Backend integration",
      "Completed",
      "Sydney",
      "Robert Taylor",
      "22 Dec 2022 3pm",
      "William Wilson",
    ],
  ]);

  // Initialize sortedColumn state with a default sorting configuration.
  const [sortedColumn, setSortedColumn] = useState({
    index: initialSortColumnID,
    ascending: true,
  });

  const [showChevron, setShowChevron] = useState(1);

  // Helper function to get cell value at given row and idx.
  const getCellValue = (row, idx) => row[idx];

  // Function factory to generate a comparer function for sorting table data.
  const comparer = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2))(
      getCellValue(asc ? a : b, idx),
      getCellValue(asc ? b : a, idx)
    );

  useEffect(() => {
    if (initialSortColumnID !== null) {
      // Check added here
      const initialIndex = initialSortColumnID;
      const initialAscending = true;
      setTableData((prevData) =>
        [...prevData].sort(comparer(initialIndex, initialAscending))
      );
      setSortedColumn({ index: initialIndex, ascending: initialAscending });
    }
  }, [initialSortColumnID]);

  const [isTableSorted, setIsTableSorted] = useState(false);

  // Function wrapped in useCallback that handles header button click to sort table.
  const onHeaderButtonClick = useCallback(
    (index) => {
      if (sortable === "Sort") {
        // Update sortedColumn state and sort tableData based on new sorting configuration.
        setSortedColumn((prevSortedColumn) => {
          // Logic to determine if the same column is clicked or a different one.
          const isSameColumn = prevSortedColumn.index === index;
          const ascending = isSameColumn ? !prevSortedColumn.ascending : true;
          setTableData((prevData) =>
            [...prevData].sort(comparer(index, ascending))
          );
          setShowChevron(index);
          return { index, ascending };
        });
        // Mark the table as sorted manually.
        setIsTableSorted(true);
      }
    },
    [sortable]
  );

  const headers = [
    "Priority",
    "Ticket ID",
    "Project",
    "Description",
    "Status",
    "Location",
    "Assigned To",
    "Due Date",
    "Manager",
  ];

  // Updating the caption dynamically based on sorted column
  const sortCaptionText = (
    <>
      <strong>{headers[sortedColumn.index]}</strong> {""}
      {sortedColumn.ascending ? "ascending" : "descending"}
    </>
  );

  // Render table with sortedColumn state and onHeaderButtonClick event handler.
  // The table header rendering based on the sortable prop.
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        Development Progress Table
        <span
          className={styles.captionText}
          {...(addRoleStatus === "Status Role" ? { role: "status" } : {})}
        >
          {isTableSorted ? (
            <>
              {customCaptionText} <strong>{headers[sortedColumn.index]}</strong>{" "}
              {sortedColumn.ascending ? "ascending" : "descending"}
            </>
          ) : (
            "Sort table data by column header name"
          )}
        </span>
      </caption>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={header}
              id={`${header.replace(/\s+/g, "-").toLowerCase()}-${index}`}
              {...(includeScope ? { scope: "col" } : {})}
              className={styles.th}
              aria-sort={
                sortedColumn.index === index
                  ? sortedColumn.ascending
                    ? "ascending"
                    : "descending"
                  : "none"
              }
            >
              {sortable === "Sort" ? (
                <button
                  onMouseEnter={() => setShowChevron(index)}
                  onMouseLeave={() => setShowChevron(sortedColumn.index)}
                  onFocus={() => setShowChevron(index)}
                  onBlur={() => setShowChevron(sortedColumn.index)}
                  onClick={() => onHeaderButtonClick(index)}
                  className={styles.button}
                  aria-pressed={sortedColumn.index === index}
                >
                  {header}
                  <span
                    className={`
        ${styles.chevron}
        ${sortedColumn.index !== index ? styles.sortNone : ""} 
        ${
          iconVisibility === "Show icons" ||
          sortedColumn.index === index ||
          (index === 1 && sortedColumn.index === null)
            ? styles.chevronIsVisible
            : ""
        } 
        ${
          iconVisibility === "Show on hover / focus"
            ? styles.chevronHoverFocus
            : ""
        } 
        ${
          showChevron === index || sortedColumn.index === index
            ? sortedColumn.index === index && sortedColumn.ascending
              ? styles.chevronUp
              : styles.chevronDown
            : "hidden"
        }
    `}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                header
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.td}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReactTableSortable;
