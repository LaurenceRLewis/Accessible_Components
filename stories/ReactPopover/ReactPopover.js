import React, { useState, useRef, useEffect } from "react";
import styles from "./ReactPopover.module.css";

const Popover = ({
  withRole,
  ariaLabel,
  nameAriaLabelledBy = false,
  useArrowKeys,
  dismissOnClickOutside,
  contentType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  const activeElementsRef = useRef([]);
  const focusIndex = useRef(0);

  // Validate that both aria-label and aria-labelledby aren't set
  if (ariaLabel && nameAriaLabelledBy) {
    console.error('Only one of ariaLabel or nameAriaLabelledBy should be set.');
    return null;
  }

  const idForLabelledBy = nameAriaLabelledBy ? "popover-button-id" : null;

  const handleClickOutside = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const handleTabKey = (event) => {
    if (event.key !== "Tab") return;

    // We'll defer checking relatedTarget because on some browsers it may not get populated immediately.
    setTimeout(() => {
      const focusOutsidePopover =
        !popoverRef.current.contains(document.activeElement) &&
        document.activeElement !== buttonRef.current;
      if (focusOutsidePopover) {
        setIsOpen(false);
      }
    }, 0);
  };

  const handleEscKey = (event) => {
    if (
      event.key === "Escape" &&
      (popoverRef.current.contains(event.target) ||
        event.target === buttonRef.current)
    ) {
      setIsOpen(false);
      buttonRef.current.focus();
    }
  };

  const handleArrowKeyNavigation = (event) => {
    if (
      useArrowKeys &&
      contentType === "Menu" &&
      popoverRef.current.contains(document.activeElement) &&
      (event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "Home" ||
        event.key === "End")
    ) {
      event.preventDefault();

      switch (event.key) {
        case "ArrowUp":
          focusIndex.current =
            (focusIndex.current - 1 + activeElementsRef.current.length) %
            activeElementsRef.current.length;
          break;
        case "ArrowDown":
          focusIndex.current =
            (focusIndex.current + 1) % activeElementsRef.current.length;
          break;
        case "Home":
          focusIndex.current = 0;
          break;
        case "End":
          focusIndex.current = activeElementsRef.current.length - 1;
          break;
      }
      activeElementsRef.current[focusIndex.current].focus();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleArrowKeyNavigation);

    return () => {
      document.removeEventListener("keydown", handleArrowKeyNavigation);
    };
  }, [useArrowKeys, contentType]);

  useEffect(() => {
    document.addEventListener("keydown", handleTabKey);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  useEffect(() => {
    if (dismissOnClickOutside) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [dismissOnClickOutside]);

  useEffect(() => {
    if (isOpen && useArrowKeys && contentType === "Menu") {
      activeElementsRef.current = Array.from(
        popoverRef.current.querySelectorAll("button, a")
      );
      focusIndex.current = 0;
      activeElementsRef.current[focusIndex.current].focus();
    }
  }, [isOpen, useArrowKeys, contentType]);

  const classMap = {
    "Help with Reference link": styles.helpWithReferenceLink,
    "Content only (tooltip)": styles.contentOnly,
    "Menu": styles.menu,
  };
  let popoverClass = styles.popoverContent;

  let popoverContent;
  switch (contentType) {
    case "Menu":
      popoverClass += ` ${classMap[contentType] || ''}`;
      popoverContent = (
        <ul>
          <li>
            <button>Menu 1</button>
          </li>
          <li>
            <button>Menu 2</button>
          </li>
          <li>
            <a href="#link1">Menu 3</a>
          </li>
        </ul>
      );
      break;
    case "Help with Reference link":
      popoverClass += ` ${classMap[contentType] || ''}`;
      popoverContent = (
        <div>
          <h3>Help Heading</h3>
          <p>
            Some brief help or instruction.{" "}
            <a href="#externalResource">External Resource</a>
          </p>
        </div>
      );
      break;
    case "Content only (tooltip)":
      popoverClass += ` ${classMap[contentType] || ''}`;
      popoverContent = (
        <div>
          <h3>How to use</h3>
          <p>A brief paragraph explaining usage.</p>
        </div>
      );
      break;
    default:
      popoverContent = null;
  }

  return (
    <>
      <h1>Popover Component</h1>
      <p>
        A Popover is a widely-adopted component widget designed to present content on top of other content. A popover might be used to show a menu of choices or extra details about a specific item on a page or for drawing the user's attention to important information, instructional help, or necessary actions.
      </p>
      <p>A Popover should always be non-modal. Popovers are most effective when used to showcase supplementary information or options without disrupting the user's ongoing tasks.</p>

      <div className={styles.popoverWrapper}>
        <button
          type="button" 
          ref={buttonRef}
          id={idForLabelledBy} // Setting the ID of the button to nameAriaLabelledBy prop
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="popover-content"
          className={styles.popoverButton}
        >
          Popover
        </button>
        {isOpen && (
          <div
          ref={popoverRef}
          id="popover-content" 
          className={popoverClass}
          role={withRole ? "region" : null}
          aria-label={withRole && ariaLabel ? ariaLabel : null}  // Set aria-label only if withRole is true
          aria-labelledby={withRole && idForLabelledBy ? idForLabelledBy : null}  // Set aria-labelledby only if withRole is true
        >
          {popoverContent}
        </div>
        )}
      </div>
      <p>The HTML Living Standard have a PopOver API, <a href="https://html.spec.whatwg.org/multipage/popover.html">6.11 The popover attribute</a>,  which is currently an experimental technology. The PopOver API refers to the content container that pops up and can be applied to elements with the most relevant semantics.</p>
    </>
  );
};

export default Popover;
