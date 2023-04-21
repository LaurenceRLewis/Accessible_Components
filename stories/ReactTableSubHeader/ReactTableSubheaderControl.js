import React from "react";

const ReactTableSubheaderControl = ({
  headerBackgroundColor,
  headerTextColor,
  tdFontWeight,
  thFontWeight,
}) => {
  const headers = [
    { id: "test-product", name: "Test Product", subName: "Sub Product" },
    { id: "name", name: "Name" },
    { id: "brand", name: "Brand" },
    { id: "stock-quantity", name: "Stock quantity", subName: "Sub quantity" },
    { id: "wholesale-cost", name: "Wholesale cost" },
    { id: "quantity-sold", name: "Quantity sold" },
    { id: "gross-sales", name: "Gross sales" },
    { id: "net-sales", name: "Net sales", subName: "Combined Sale" },
  ];

  const subHeaderRow = [
    {
      id: "sub-product",
      colspan: 3,
      name: "Sub Product",
    },
    {
      id: "sub-quantity",
      colspan: 4,
      name: "Sub quantity",
    },
    {
      id: "combined-sales",
      name: "Combined Sale",
    },
  ];

  const data = [
    [
      "Test Product",
      "124689389",
      "0",
      "$35.00",
      "$60.00",
      "20",
      "$1200.00",
      "$500.00",
    ],
    [
      "Test Product",
      "124689332",
      "30",
      "$35.00",
      "$60.00",
      "10",
      "$600.00",
      "$250.00",
    ],
    // ... Add more data rows here
  ];

  const cellHeaders = [
    [headers[0].id, subHeaderRow[0].id],
    [headers[1].id, subHeaderRow[0].id],
    [headers[2].id, subHeaderRow[0].id],
    [headers[3].id, subHeaderRow[1].id],
    [headers[4].id, subHeaderRow[1].id],
    [headers[5].id, subHeaderRow[1].id],
    [headers[6].id, subHeaderRow[1].id],
    [headers[7].id, subHeaderRow[2].id],
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map(({ id, name }) => (
              <th
                className="tl-header"
                id={id}
                key={id}
                style={{
                  backgroundColor: headerBackgroundColor,
                  color: headerTextColor,
                }}
              >
                {name}
              </th>
            ))}
          </tr>
          <tr>
            {subHeaderRow.map(({ id, colspan, name }) => (
              <th
                className="tl-sub-header"
                id={id}
                key={id}
                style={{ fontWeight: thFontWeight }}
                colSpan={colspan}
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
  {data.map((rowData, rowIndex) => (
    <tr key={rowIndex}>
      {rowData.map((cellData, cellIndex) => (
        <td
          key={cellIndex}
          headers={cellHeaders[cellIndex].join(" ")}
          style={{ fontWeight: tdFontWeight }}
        >
          {cellData}
        </td>
      ))}
    </tr>
  ))}
</tbody>
</table>
</div>
);
};

export default ReactTableSubheaderControl;