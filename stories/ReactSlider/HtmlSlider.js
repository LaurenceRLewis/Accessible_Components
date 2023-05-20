//HtmlSlider.js
import React, { useCallback } from 'react';
import styles from './HtmlSlider.module.css';

const HtmlSlider = ({ min, max, step, onChange }) => {
  const [value, setValue] = React.useState((min + max) / 2);

  const handleChange = useCallback((event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange && onChange(newValue);
  }, [onChange]);

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderHeading}>HTML Slider</h2>
      <p className={styles.sliderParagraph}>
        The HTML input of type range lets you select a number within a range. You can define the range using the 'min' and 'max' attributes. The 'step' attribute allows you to define the increment between values.
      </p>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        className={styles.rangeInput}
        onChange={handleChange}
      />
      <div aria-hidden="true" className={styles.sliderValue}>{value}</div>
      <div className={styles.rangeContainer}>
        <div className={styles.rangeNumber}>{min}</div>
        <div className={styles.rangeNumber}>{max}</div>
      </div>
    </div>
  );
};

export default HtmlSlider;