import React, { useState, useRef, useEffect } from "react";
import styles from "./ReactPopover.module.css";

const Popover = ({
  withRole,
  ariaLabel,
  useArrowKeys,
  dismissOnClickOutside,
  contentType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  const activeElementsRef = useRef([]);
  const focusIndex = useRef(0);

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
      contentType === "ActiveContentOnly" &&
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
    if (isOpen && useArrowKeys && contentType === "ActiveContentOnly") {
      activeElementsRef.current = Array.from(
        popoverRef.current.querySelectorAll("button, a")
      );
      focusIndex.current = 0;
      activeElementsRef.current[focusIndex.current].focus();
    }
  }, [isOpen, useArrowKeys, contentType]);

  let popoverContent;
  switch (contentType) {
    case "ActiveContentOnly":
      popoverContent = (
        <ul>
          <li>
            <button>Button 1</button>
          </li>
          <li>
            <button>Button 2</button>
          </li>
          <li>
            <a href="#link1">Link 1</a>
          </li>
        </ul>
      );
      break;
    case "HelpWithReferenceLink":
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
    case "StaticContentOnly":
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
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="popover-content"
        >
          Popover
        </button>
        {isOpen && (
          <div
            ref={popoverRef}
            id="popover-content"
            className={styles.popoverContent}
            role={withRole ? "region" : null}
            aria-label={ariaLabel || null}
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
