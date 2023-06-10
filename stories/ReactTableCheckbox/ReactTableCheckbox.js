import React from "react";
import "./styles.css";

const ReactTableCheckbox = ({ disabledCheckboxes = "" }) => {
  const rows = [
    {
      id: 0,
      email: "john.doe@example.com",
      dob: "02-07-1991",
      age: 32,
      org: "Telstra",
    },
    {
      id: 1,
      email: "jane.smith@example.com",
      dob: "01-05-1990",
      age: 33,
      org: "Telstra",
    },
    {
      id: 2,
      email: "mike.jones@example.com",
      dob: "12-12-1985",
      age: 37,
      org: "Telstra",
    },
    {
      id: 3,
      email: "sarah.jennings@example.com",
      dob: "06-15-1988",
      age: 34,
      org: "Telstra",
    },
    {
      id: 4,
      email: "peter.parker@example.com",
      dob: "08-23-1992",
      age: 30,
      org: "Telstra",
    },
  ];

  // parse disabledCheckboxes string into an array of numbers
  const disabledCheckboxesArray = disabledCheckboxes
    ? disabledCheckboxes.split(",").map(Number)
    : [];

  return (
    <table>
      <thead>
        <tr>
          <th id="select-header">
            Select Row
          </th>
          <th id="status-header">Status</th>
          <th>DOB</th>
          <th>Age</th>
          <th id="org-header">Organization</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                key={`${row.id}-${disabledCheckboxesArray.includes(row.id)}`} 
                type="checkbox"
                id={`checkbox-${row.id}`}
                aria-labelledby={`select-header status-${row.id} org-${row.id}`}
                disabled={disabledCheckboxesArray.includes(row.id)}
              />
            </td>
            <td id={`status-${row.id}`}>{row.email}</td>
            <td>{row.dob}</td>
            <td>{row.age}</td>
            <td id={`org-${row.id}`}>{row.org}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReactTableCheckbox;
