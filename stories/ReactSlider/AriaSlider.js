import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./AriaSlider.module.css";

const AriaSlider = ({ min, max, step, onChange }) => {
  const [value, setValue] = useState(min);
  const sliderRef = useRef(null);

  useEffect(() => {
    sliderRef.current.focus();
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      let newValue = value;
      const stepSize = step || 1;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          newValue = Math.min(value + stepSize, max);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          newValue = Math.max(value - stepSize, min);
          break;
        case "Home":
          newValue = min;
          break;
        case "End":
          newValue = max;
          break;
        case "PageUp":
          newValue = Math.min(value + stepSize * 10, max);
          break;
        case "PageDown":
          newValue = Math.max(value - stepSize * 10, min);
          break;
        default:
          return;
      }

      event.preventDefault();
      setValue(newValue);
      onChange && onChange(newValue);
    },
    [value, min, max, step, onChange]
  );

  return (
    <div>
      <h2 className={styles.sliderHeading}>ARIA Slider</h2>
      <p className={styles.sliderParagraph}>
        The ARIA slider allows you to select a value within a range using the
        keyboard or mouse. You can define the range using the 'min' and 'max'
        attributes, and the 'step' attribute sets the increment between values.
      </p>
      <div
        role="slider"
        tabIndex={0}
        ref={sliderRef}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        onKeyDown={handleKeyDown}
        className={styles.ariaSlider}
        aria-label="ARIA slider"
      >
        <div className={styles.ariaSliderTrack}>
          <div
            className={styles.ariaSliderThumb}
            style={{
              left: `${((value - min) / (max - min)) * 100}%`,
              marginLeft:
                value === min ? "10px" : value === max ? "-10px" : "0px",
            }}
          />
        </div>
        <div className={styles.rangeContainer}>
          <div className={styles.rangeNumber}>{min}</div>
          <div aria-hidden="true" className={styles.nowValue}>
            {value}
          </div>
          <div className={styles.rangeNumber}>{max}</div>
        </div>
      </div>
    </div>
  );
};

export default AriaSlider;
