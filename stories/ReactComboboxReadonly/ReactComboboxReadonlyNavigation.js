import { useEffect, useState, useRef } from 'react';

const useKeyboardNavigation = (isListboxOpen, listboxRef, handleSelectOption, setListboxOpen) => {
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
      case 'ArrowUp':
        event.preventDefault();
        newIndex = focusedOptionIndex - 1 >= 0 ? focusedOptionIndex - 1 : options.length - 1;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");  
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        break;
      
      case 'ArrowDown':
        event.preventDefault();
        newIndex = focusedOptionIndex + 1 < options.length ? focusedOptionIndex + 1 : 0;
        options[focusedOptionIndex].setAttribute("aria-selected", "false");  
        options[newIndex].focus();
        options[newIndex].setAttribute("aria-selected", "true");
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(newIndex);
        break;
        
      case 'Home':
        event.preventDefault();
        options[0].focus();
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(0);
        break;
        
      case 'End':
        event.preventDefault();
        options[options.length - 1].focus();
        setActiveDescendantId(options[newIndex].id);
        setFocusedOptionIndex(options.length - 1);
        break;
        
      case ' ':
      case 'Enter':
        event.preventDefault();
        handleSelectOption(options[focusedOptionIndex].textContent);
        setActiveDescendantId(options[newIndex].id);
        break;
  
      case 'Escape':
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