import React, { useState } from "react";
import styles from "./ReactInputPassword.module.css";

const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" fill="none" stroke-width="2"/>
    <circle cx="12" cy="12" r="4.4" className={styles["pupil"]} fill="none" stroke-width="2"/>
  </svg>
);

function ReactInputPassword(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const getInputType = () => {
    if (props.maskingMethod === "password mask") {
      return isVisible ? "text" : "password";
    }
    return "text";
  };


  const getPasswordClass = () => {
    if (props.maskingMethod === "css mask" && !isVisible) {
      return styles.masked;
    }
    return "";
  };

  return (
    <div className={styles["password-container"]}>
      <label htmlFor="passwordInput">Password:</label>
      <div className={styles["input-wrapper"]}>
        <input
          type={getInputType()}
          id="passwordInput"
          className={getPasswordClass()}
        />
        <button 
          id="togglePasswordVisibility" 
          aria-label="Toggle password visibility" 
          aria-pressed={isVisible ? "true" : "false"}
          onClick={handleToggle}
        >
          <EyeIcon />
        </button>
      </div>
    </div>
  );
}

ReactInputPassword.defaultProps = {
  includeAriaPressed: true,
  maskingMethod: "password mask",
};

export default ReactInputPassword;