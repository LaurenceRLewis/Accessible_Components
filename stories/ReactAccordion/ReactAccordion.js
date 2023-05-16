
import React, { useState } from "react";
import "./styles.css";

// Define ChevronUp SVG icon component
const ChevronUp = () => (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path d="M5 8l5 5 5-5H5z" fill="currentColor" />
    </svg>
  );

// Define ChevronDown SVG icon component
const ChevronDown = () => (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path d="M5 12l5-5 5 5H5z" fill="currentColor" />
    </svg>
  );

// Define ChevronDown SVG icon component
const Accordion = ({ items, groupName, multiExpand, CustomIcon }) => {
  const [activeIndices, setActiveIndices] = useState([]);
    
    // Handle title click event
    const onTitleClick = (index) => {
      if (multiExpand) {
        setActiveIndices((prevIndices) =>
          prevIndices.includes(index)
            ? prevIndices.filter((i) => i !== index)
            : [...prevIndices, index]
        );
      } else {
        setActiveIndices(index === activeIndices[0] ? [] : [index]);
      }
    };
  
    // Handle title keydown event
    const onTitleKeyDown = (event, index) => {
      const key = event.key;
  
      if (key === "Enter" || key === " ") {
        onTitleClick(index);
        event.preventDefault();
      } else if (key === "ArrowDown" || key === "ArrowUp") {
        const newIndex =
          key === "ArrowDown"
            ? (index + 1) % items.length
            : (index - 1 + items.length) % items.length;
        const newButton = document.getElementById(
          `${groupName}-heading-${newIndex}`
        );
        newButton.focus();
        event.preventDefault();
      } else if (key === "Home") {
        const firstButton = document.getElementById(`${groupName}-heading-0`);
        firstButton.focus();
        event.preventDefault();
      } else if (key === "End") {
        const lastButton = document.getElementById(
          `${groupName}-heading-${items.length - 1}`
        );
        lastButton.focus();
        event.preventDefault();
      }
    };
  
    // Render accordion items
    const renderedItems = items.map((item, index) => {
      const active = activeIndices.includes(index) ? "active" : "";
  
      // Return accordion markup
      return (
        <React.Fragment key={item.title}>
          <h3>
            <button
              className={`title ${active}`}
              onClick={() => onTitleClick(index)}
              onKeyDown={(event) => onTitleKeyDown(event, index)}
              id={`${groupName}-heading-${index}`}
              aria-controls={`${groupName}-panel-${index}`}
              aria-expanded={active === "active"}
            >
              <span>{item.title}</span>
              {CustomIcon ? <CustomIcon active={active} /> : (active ? <ChevronDown /> : <ChevronUp />)}
            </button>
          </h3>
          <div
            className={`content ${active}`}
            id={`${groupName}-panel-${index}`}
            role="region"
            aria-labelledby={`${groupName}-heading-${index}`}
            hidden={active !== "active"}
          >
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });
  
    return <div className="ui styled accordion">{renderedItems}</div>;
  };

export default Accordion;
