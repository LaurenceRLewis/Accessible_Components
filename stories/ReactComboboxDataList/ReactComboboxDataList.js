import React from "react";
import { townsAndCities } from "./ReactComboboxDataListData";
import styles from "./ReactComboboxDataList.module.css";

const ReactCombobox = ({ showHelpText = 'No' }) => {
  return (
    <>
      <h1>HTML Datalist</h1>
      <div className={styles["comboboxContainer"]}>
        <label id="combobox-label" htmlFor="combobox-input">
          Australian cities and towns
        </label>
        {showHelpText === 'Yes' && (
          <p id="datalistHelpText" className={styles["helpText"]}>
            Help text
          </p>
        )}
        <input
          id="combobox-input"
          className={styles["comboboxInput"]}
          list="combobox-list"
        />
        <datalist id="combobox-list">
          {townsAndCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </datalist>
      </div>
    </>
  );
};

export default ReactCombobox;