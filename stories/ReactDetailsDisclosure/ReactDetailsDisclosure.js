import React from "react";
import styles from "./ReactDetailsDisclosure.module.css";

const ReactDetailsDisclosure = ({ isOpen = false, children }) => {
  return (
    <details open={isOpen} className={styles["detailsContainer"]}>
      <summary className={styles["summary"]}>
        <h2>HTML Disclosure component</h2>
      </summary>
      <div className={styles["detailsContent"]}>
        The HTML Summary/Details component is a simple and effective way to create collapsible sections on a webpage. It consists of a summary element that serves as a clickable header and a details element that holds the collapsible content. When the user clicks on the summary, the details expand or collapse, making it easy to show or hide additional information. This component is lightweight, widely supported by browsers, and can be easily customized to match the design of a website or application. It's a valuable tool for organizing and presenting content in a concise and interactive manner.
      </div>
    </details>
  );
};

export default ReactDetailsDisclosure;
