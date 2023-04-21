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
      headers: [
        "test-product", 
        "name", 
        "brand"
      ],
      colspan: 3,
      name: "Sub Product",
    },
    {
      headers: [
        "stock-quantity",
        "wholesale-cost",
        "quantity-sold",
        "gross-sales",
      ],
      colspan: 4,
      name: "Sub quantity",
    },
    {
      headers: ["net-sales"],
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
            {subHeaderRow.map(({ headers, colspan, name }) => (
              <th
                className="tl-sub-header"
                headers={headers.join(" ")}
                key={name} style={{ fontWeight: thFontWeight }}
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
                <td key={cellIndex} style={{ fontWeight: tdFontWeight }}>
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
