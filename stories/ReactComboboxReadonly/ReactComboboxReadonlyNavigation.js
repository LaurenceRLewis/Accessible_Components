import { useEffect, useState, useRef } from "react";

const useKeyboardNavigation = (
  isListboxOpen,
  listboxRef,
  handleSelectOption,
  setListboxOpen,
  ariaMultiselectable,
  availableOptions,
  triggerButtonRef,
  selectedOptions
) => {
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);
  const [activeDescendantId, setActiveDescendantId] = useState(null);

  useEffect(() => {
    if (isListboxOpen) {
      const options = Array.from(listboxRef.current.children);
      options.forEach((option, index) => {
        option.setAttribute("aria-selected", index === focusedOptionIndex);
      });
      setActiveDescendantId(`option-${focusedOptionIndex}`);
    }
  }, [isListboxOpen, focusedOptionIndex, listboxRef]);

  const handleKeyDown = (event) => {
    const { key } = event;
    const options = Array.from(listboxRef.current.children);
    let newIndex;

    switch (key) {
      case "ArrowDown":
        event.preventDefault();
        if (!isListboxOpen) {
          setListboxOpen(true);
        } else {
          newIndex =
            focusedOptionIndex + 1 < options.length
              ? focusedOptionIndex + 1
              : focusedOptionIndex;
          options[focusedOptionIndex].setAttribute("aria-selected", "false");
          options[newIndex].setAttribute("aria-selected", "true");
          options[newIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
          setFocusedOptionIndex(newIndex);
        }
        break;

      case "ArrowUp":
        event.preventDefault();
        if (!isListboxOpen) {
          setListboxOpen(true);
        } else {
          newIndex =
            focusedOptionIndex - 1 >= 0
              ? focusedOptionIndex - 1
              : focusedOptionIndex;
          options[focusedOptionIndex].setAttribute("aria-selected", "false");
          options[newIndex].setAttribute("aria-selected", "true");
          options[newIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
          setFocusedOptionIndex(newIndex);
        }
        break;

      case "Enter":
      case " ":
        event.preventDefault();
        if (isListboxOpen) {
          handleSelectOption(options[focusedOptionIndex].textContent);
          if (!ariaMultiselectable) {
            setListboxOpen(false);
          }
        } else {
          setListboxOpen(true);
        }
        break;

      case "Escape":
        event.preventDefault();
        setListboxOpen(false);
        break;

      default:
        break;
    }
  };

  return { handleKeyDown, activeDescendantId };
};

export default useKeyboardNavigation;
