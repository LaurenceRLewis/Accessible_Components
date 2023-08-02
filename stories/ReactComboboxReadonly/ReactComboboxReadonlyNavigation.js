import { useEffect, useState, useRef } from "react";

const useKeyboardNavigation = (
  isListboxOpen,
  listboxRef,
  handleSelectOption,
  setListboxOpen,
  ariaMultiselectable,
  availableOptions,
  triggerButtonRef
) => {
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);
  const [activeDescendantId, setActiveDescendantId] = useState(null);
  useEffect(() => {
    if (isListboxOpen) {
      listboxRef.current.focus();
    }
  }, [isListboxOpen, listboxRef]);

  const handleKeyDown = (event) => {
    const { key } = event;
    const options = Array.from(listboxRef.current.children);
    let newIndex;

    switch (key) {
      case "ArrowUp":
        event.preventDefault();
        newIndex = focusedOptionIndex - 1 >= 0 ? focusedOptionIndex - 1 : 0;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        triggerButtonRef.current.setAttribute(
          "aria-activedescendant",
          options[newIndex].id
        );
        break;

      case "ArrowDown":
        event.preventDefault();
        newIndex =
          focusedOptionIndex + 1 < options.length
            ? focusedOptionIndex + 1
            : focusedOptionIndex;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        triggerButtonRef.current.setAttribute(
          "aria-activedescendant",
          options[newIndex].id
        );
        break;

      case "Home":
        event.preventDefault();
        options[0].focus();
        setActiveDescendantId(options[0].id);
        setFocusedOptionIndex(0);
        break;

      case "End":
        event.preventDefault();
        options[options.length - 1].focus();
        setActiveDescendantId(options[options.length - 1].id);
        setFocusedOptionIndex(options.length - 1);
        break;

      case "PageUp":
        event.preventDefault();
        newIndex = focusedOptionIndex - 10 >= 0 ? focusedOptionIndex - 10 : 0;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        break;

      case "PageDown":
        event.preventDefault();
        newIndex =
          focusedOptionIndex + 10 < options.length
            ? focusedOptionIndex + 10
            : options.length - 1;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        break;

      case "Enter":
      case " ":
        event.preventDefault();
        handleSelectOption(options[focusedOptionIndex].textContent);
        // If 'ariaMultiselectable' is false and one item is already selected, close the listbox
        if (!ariaMultiselectable && selectedOptions.length > 0) {
          setListboxOpen(false);
        }
        break;

      case "Escape":
        event.preventDefault();
        setListboxOpen(false);
        break;

      case "Tab":
        event.preventDefault();
        handleSelectOption(options[focusedOptionIndex].textContent);
        setListboxOpen(false);
        // let the browser handle the default tabbing behavior
        break;

      case "Alt+ArrowUp":
        event.preventDefault();
        handleSelectOption(options[focusedOptionIndex].textContent);
        setListboxOpen(false);
        break;

      default:
        break;
    }
  };

  return { handleKeyDown, activeDescendantId };
};

export default useKeyboardNavigation;