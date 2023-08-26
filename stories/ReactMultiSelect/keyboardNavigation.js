import { useEffect, useState } from "react";

const useKeyboardNavigation = (
  isListboxOpen,
  listboxRef,
  handleSelectOption,
  setListboxOpen,
  selectionModel
) => {
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);
  const [explicitlySetOptions, setExplicitlySetOptions] = useState(new Set());

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
      case "ArrowDown":
        event.preventDefault();
        newIndex = (key === "ArrowUp")
          ? focusedOptionIndex - 1 >= 0 ? focusedOptionIndex - 1 : options.length - 1
          : focusedOptionIndex + 1 < options.length ? focusedOptionIndex + 1 : 0;

        if (!explicitlySetOptions.has(focusedOptionIndex)) {
          options[focusedOptionIndex].setAttribute("aria-selected", "false");
          options[focusedOptionIndex].setAttribute("tabindex", "-1");
        }
        
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        options[newIndex].setAttribute("tabindex", "0");
        
        setFocusedOptionIndex(newIndex);
        break;

      case "Home":
        event.preventDefault();
        options[focusedOptionIndex].setAttribute("tabindex", "-1");
        options[0].focus();
        options[0].setAttribute("tabindex", "0");
        setFocusedOptionIndex(0);
        break;

      case "End":
        event.preventDefault();
        options[focusedOptionIndex].setAttribute("tabindex", "-1");
        options[options.length - 1].focus();
        options[options.length - 1].setAttribute("tabindex", "0");
        setFocusedOptionIndex(options.length - 1);
        break;

      case " ":
      case "Enter":
        event.preventDefault();
        const optionElement = options[focusedOptionIndex];
        handleSelectOption(optionElement.textContent);

        if (explicitlySetOptions.has(focusedOptionIndex)) {
          optionElement.classList.remove('option--set');
          optionElement.setAttribute("aria-selected", "false");
          explicitlySetOptions.delete(focusedOptionIndex);
        } else {
          optionElement.classList.add('option--set');
          optionElement.setAttribute("aria-selected", "true");
          explicitlySetOptions.add(focusedOptionIndex);
        }

        setExplicitlySetOptions(new Set(explicitlySetOptions));
        break;

      default:
        break;
    }
  };

  return handleKeyDown;
};

export default useKeyboardNavigation;