import { useEffect, useState } from 'react';

const useKeyboardNavigation = (isListboxOpen, listboxRef, handleSelectOption, selectionModel) => {
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);

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
      case 'ArrowUp':
        event.preventDefault();
        newIndex = focusedOptionIndex - 1 >= 0 ? focusedOptionIndex - 1 : options.length - 1;
        options[newIndex].focus();
        setFocusedOptionIndex(newIndex);
        break;
      
      case 'ArrowDown':
        event.preventDefault();
        newIndex = focusedOptionIndex + 1 < options.length ? focusedOptionIndex + 1 : 0;
        options[newIndex].focus();
        setFocusedOptionIndex(newIndex);
        break;
      
      case 'Home':
        event.preventDefault();
        options[0].focus();
        setFocusedOptionIndex(0);
        break;
      
      case 'End':
        event.preventDefault();
        options[options.length - 1].focus();
        setFocusedOptionIndex(options.length - 1);
        break;
      
      case ' ':
      case 'Enter':
        event.preventDefault();
        handleSelectOption(options[focusedOptionIndex].textContent);
        break;

      default:
        break;
    }
  };

  return handleKeyDown;
};

export default useKeyboardNavigation;