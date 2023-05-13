const useKeyboardNavigation = (isListboxOpen, listboxRef, handleSelectOption, selectionModel) => {
  useEffect(() => {
    if (isListboxOpen) {
      listboxRef.current.focus();
    }
  }, [isListboxOpen, listboxRef]);

  const handleKeyDown = (event) => {
    const { key } = event;
    const currentIndex = Array.from(listboxRef.current.children).findIndex(
      (child) => child === document.activeElement
    );

    if (key === 'ArrowUp' || key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex =
        key === 'ArrowUp'
          ? currentIndex - 1
          : currentIndex + 1;

      if (nextIndex >= 0 && nextIndex < listboxRef.current.children.length) {
        listboxRef.current.children[nextIndex].focus();
      }
    }
    // If the selection model is 'default', Space or Enter key will select or deselect the option.
    else if ((key === ' ' || key === 'Enter') && selectionModel === 'default') {
      event.preventDefault();
      handleSelectOption(document.activeElement.textContent);
    }
    // If selection model is 'alternative', Space or Enter key will select the option and deselect others.
    else if ((key === ' ' || key === 'Enter') && selectionModel === 'alternative') {
      event.preventDefault();
      handleSelectOption(document.activeElement.textContent);
    }
  };

  return handleKeyDown;
};