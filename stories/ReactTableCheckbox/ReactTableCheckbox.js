import React, { useState, useEffect } from "react";
import styles from './ReactTableCheckbox.module.css';

const ReactTableCheckbox = ({ disabledCheckboxes = "", defaultCheckedBoxes = "" }) => {
  const rows = [
    {
      id: 0,
      name: "John Doe",
      email: "john.doe@example.com",
      dob: "02-07-1991",
      employeeID: "001",
    },
    {
      id: 1,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      dob: "01-05-1990",
      employeeID: "002",
    },
    {
      id: 2,
      name: "Mike Jones",
      email: "mike.jones@example.com",
      dob: "12-12-1985",
      employeeID: "003",
    },
    {
      id: 3,
      name: "Sarah Jennings",
      email: "sarah.jennings@example.com",
      dob: "06-15-1988",
      employeeID: "004",
    },
    {
      id: 4,
      name: "Peter Parker",
      email: "peter.parker@example.com",
      dob: "08-23-1992",
      employeeID: "005",
    },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [checkedState, setCheckedState] = useState([]);

  const disabledCheckboxesArray = disabledCheckboxes ? disabledCheckboxes.split(",").map(Number) : [];
  const defaultCheckedBoxesArray = defaultCheckedBoxes ? defaultCheckedBoxes.split(",").map(Number) : [];

  useEffect(() => {
    setCheckedState(rows.map((row) => {
        if (defaultCheckedBoxesArray.includes(row.id)) {
            return true;
        } else {
            return false;
        }
    }));
}, [defaultCheckedBoxesArray, rows]);

  useEffect(() => {
    if (selectAll) {
      setCheckedState(rows.map(row => !disabledCheckboxesArray.includes(row.id)));
    } else {
      setCheckedState(checkedState.map(item => false));
    }
  }, [selectAll]);

  const handleSingleCheckboxChange = (id, value) => {
    setCheckedState(checkedState.map((item, idx) => (idx === id ? value : item)));
    if (!value) {
      setSelectAll(false);
    }
  };

  return (
    <table className={styles.table}>
      <caption>
        <h2>Testing table with check box select all</h2>
      </caption>
      <thead className={styles.thead}>
        <tr>
          <th id="selectAll" className={styles.th}>
            <input
               className={styles.input}
              type="checkbox"
              aria-label="Select all rows"
              onChange={e => setSelectAll(e.target.checked)}
              checked={selectAll}
            /> 
              <span aria-hidden="true" className={styles.spacing}>Select all</span>
          </th>
          <th id="nameColumn" className={styles.th}>Name</th>
          <th className={styles.th}>Email</th>
          <th className={styles.th}>DOB</th>
          <th id="employeeIDColumn" className={styles.th}>Employee ID</th>
        </tr>
      </thead>
      <tbody>
      {rows.map((row, idx) => (
    <tr key={row.id}>
        <td className={styles.td}>
            <input
                className={styles.input}
                key={`${row.id}-${disabledCheckboxesArray.includes(row.id)}`}
                type="checkbox"
                id={`checkbox-${row.id}`}
                aria-labelledby={`name-${row.id} employeeID-${row.id}`}
                disabled={disabledCheckboxesArray.includes(row.id)}
                checked={checkedState[idx]}
                onChange={e => handleSingleCheckboxChange(idx, e.target.checked)}
            />
        </td>
        <th className={styles.td} id={`name-${row.id}`} scope="row">{row.name}</th>
        <td className={styles.td}>{row.email}</td>
        <td className={styles.td}>{row.dob}</td>
        <td className={styles.td} id={`employeeID-${row.id}`}>{row.employeeID}</td>
    </tr>
))}
      </tbody>
    </table>
  );
};

export default ReactTableCheckbox;