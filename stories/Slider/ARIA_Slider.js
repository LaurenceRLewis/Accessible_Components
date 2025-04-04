import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./ARIA_Slider.module.css";

const ARIA_Slider = ({
  min,
  max,
  step,
  onChange,
  ariaValueText,
  updateAriaValueText,
}) => {
  const [value, setValue] = useState(min);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  // Calculate the aria-valuetext attribute
  const ariaValueNow = `${value} of ${max} ${ariaValueText}`;
  //State for the text input value
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    sliderRef.current.focus();
  }, []);

  const handleDecrement = () => {
    let newValue = Math.max(value - step, min);
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const handleIncrement = () => {
    let newValue = Math.min(value + step, max);
    setValue(newValue);
    onChange && onChange(newValue);
  };

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

  const handleMouseInteraction = useCallback(
    (event) => {
      if (event.buttons !== 1) return;

      const sliderRect = sliderRef.current.getBoundingClientRect();
      const sliderWidth = sliderRect.width;
      const clickPosition = event.clientX - sliderRect.left;
      const clickPercentage = clickPosition / sliderWidth;
      const newValue = Math.round(min + clickPercentage * (max - min));

      setValue(newValue);
      onChange && onChange(newValue);
    },
    [min, max, onChange]
  );

  const handleMouseClick = (event) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const sliderWidth = sliderRect.width;
    const clickPosition = event.clientX - sliderRect.left;
    const clickPercentage = clickPosition / sliderWidth;
    const newValue = Math.round(min + clickPercentage * (max - min));

    setValue(newValue);
    onChange && onChange(newValue);
  };

  const handleTouchInteraction = useCallback(
    (event) => {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const sliderWidth = sliderRect.width;
      const touchPosition = event.touches[0].clientX - sliderRect.left;
      const touchPercentage = touchPosition / sliderWidth;
      const newValue = Math.round(min + touchPercentage * (max - min));

      setValue(newValue);
      onChange && onChange(newValue);
    },
    [min, max, onChange]
  );

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      handleMouseInteraction(event);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging, handleMouseInteraction, handleMouseUp]);

  useEffect(() => {
    const handleTouchMove = (event) => {
      if (event.touches.length !== 1) return; // Only handle touch interaction with a single touch

      handleTouchInteraction(event);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    sliderRef.current.addEventListener("touchmove", handleTouchMove);
    sliderRef.current.addEventListener("touchend", handleTouchEnd);

    return () => {
      sliderRef.current.removeEventListener("touchmove", handleTouchMove);
      sliderRef.current.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchInteraction]);

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);

    if (newValue > max || newValue < min || isNaN(newValue)) {
      setHasError(true);
      return;
    }

    setHasError(false);

    // Ensure the new value is within the defined range and is a valid number
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setInputValue(newValue);
      setValue(newValue);
      onChange && onChange(newValue);
    } else {
      setInputValue(event.target.value); // Store the current input even if it's invalid
    }
  };

  useEffect(() => {
    setInputValue(value); // Keep the inputValue in sync with the slider value
  }, [value]);

  return (
    <>
      <h2 id="ariaSlider88967" className={styles.sliderHeading}>
        ARIA Slider
      </h2>
      <p className={styles.sliderParagraph}>
        The ARIA slider allows you to select a value within a range using the
        keyboard, mouse, or touch. You can define the range using the 'min' and
        'max' attributes, and the 'step' attribute sets the increment between
        values.
      </p>
      <div className={styles.sliderContainer}>
        <div>
        <label for="manualInput">Slider value</label>
        <input
          id="manualInput"
          type="number"
          min={min}
          max={max}
          value={inputValue}
          onChange={handleInputChange}
          className={styles.sliderInput}
        />
        {hasError && (
          <div className={styles.error} role="status">
            Invalid value. Please enter a number between {min} and {max}.
          </div>
        )}
        </div>
        <div
          role="slider"
          tabIndex={0}
          ref={sliderRef}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={updateAriaValueText ? ariaValueNow : undefined}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onClick={handleMouseClick}
          onTouchStart={handleMouseDown}
          className={styles.ariaSlider}
          aria-labelledby="ariaSlider88967"
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
            {/* <div aria-hidden="true" className={styles.nowValue}>
            {Math.floor(value)}
          </div> */}
            <div className={styles.rangeNumber}>{max}</div>
          </div>
        </div>
        <div className={styles.ariaValueNowGroup}>
          <button
            className={styles.minusBtn}
            aria-label="Minus"
            onClick={handleDecrement}
          >
            -
          </button>
          <div
            className={styles.ariaValueNowText}
          >{`${value} of ${max} ${ariaValueText}`}</div>
          <button
            className={styles.plusBtn}
            aria-label="plus"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default ARIA_Slider;
