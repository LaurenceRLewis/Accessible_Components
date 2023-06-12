import { useState, useEffect, useRef } from "react";
import "./ReactGrid.module.css";

const employeesData = [
  {
    checkbox: false,
    name: "John Doe",
    email: "john@example.com",
    tel: "1234567890",
    employeeID: "001"
  },
  {
    checkbox: false,
    name: "Jane Doe",
    email: "jane@example.com",
    tel: "0987654321",
    employeeID: "002"
  },
];

const TableCell = ({ type, cellData, setCellData, id, focusedCell, setFocusedCell }) => {
  const cellRef = useRef(null);

  useEffect(() => {
    if (cellRef.current && id.row === focusedCell.row && id.col === focusedCell.col) {
      cellRef.current.focus();
    }
  }, [focusedCell]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      if (e.target.tagName === 'INPUT') {
        e.target.setAttribute('tabindex', '-1');
        cellRef.current.focus();
      }
    } else if (e.key === 'Enter' || e.key === 'F2') {
      if (e.target.tagName === 'TD') {
        e.target.querySelector('input').setAttribute('tabindex', '0');
        e.target.querySelector('input').focus();
      } else if (e.target.tagName === 'INPUT') {
        e.target.setAttribute('tabindex', '-1');
        cellRef.current.focus();
      }
    } else {
      switch(e.key) {
        case 'ArrowRight':
          e.preventDefault();
          setFocusedCell((prev) => ({ row: prev.row, col: Math.min(prev.col + 1, 4) }));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedCell((prev) => ({ row: Math.min(prev.row + 1, employeesData.length - 1), col: prev.col }));
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setFocusedCell((prev) => ({ row: prev.row, col: Math.max(prev.col - 1, 0) }));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedCell((prev) => ({ row: Math.max(prev.row - 1, 0), col: prev.col }));
          break;
        default:
          break;
      }
    }
  };

  if (type === 'checkbox') {
    return (
      <td
        role="gridcell"
        ref={cellRef}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <input
          type="checkbox"
          checked={cellData}
          onChange={e => setCellData(e.target.checked)}
          tabIndex="-1"
        />
      </td>
    );
  }

  if (type === 'email' || type === 'tel') {
    return (
      <td
        role="gridcell"
        ref={cellRef}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <input
          type={type}
          value={cellData}
          onChange={e => setCellData(e.target.value)}
          tabIndex="-1"
        />
      </td>
    );
  }

  // for normal cells
  return (
    <td
      role="gridcell"
      ref={cellRef}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {cellData}
    </td>
  );
};

const ReactGrid = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [focusedCell, setFocusedCell] = useState({ row: 0, col: 0 });

  return (
    <>
    <h2 id="caption">HTML GRID</h2>
    <table role="grid" aria-labelledby="caption">
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Employee ID</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, rowIndex) => (
          <tr key={rowIndex}>
            {Object.entries(employee).map(([type, cellData], colIndex) => (
              <TableCell
                key={colIndex}
                type={type}
                cellData={cellData}
                setCellData={(newValue) => {
                  setEmployees((prevEmployees) => {
                    const newEmployees = [...prevEmployees];
                    newEmployees[rowIndex][type] = newValue;
                    return newEmployees;
                  });
                }}
                id={{ row: rowIndex, col: colIndex }}
                focusedCell={focusedCell}
                setFocusedCell={setFocusedCell}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default ReactGrid;