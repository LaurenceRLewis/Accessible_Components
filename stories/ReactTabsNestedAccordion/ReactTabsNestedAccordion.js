import React, { useState, useEffect, useRef } from "react";
import styles from "./ReactTabsNestedAccordion.module.css";

const AccordionButton = ({
  id,
  title,
  isSelected,
  onClick,
  onKeyDown,
  textColor,
  tabBackground,
}) => (
  <button
    id={id}
    className={styles.accordionButton}
    aria-controls={`tabpanel-${id}`}
    aria-expanded={isSelected}
    onClick={() => onClick(id)}
    onKeyDown={(event) => onKeyDown(id, event)}
    style={{
      color: textColor,
      backgroundColor: isSelected
        ? tabBackground.selected
        : tabBackground.default,
    }}
  >
    {title}
  </button>
);

const AccordionPanel = ({ id, isSelected, children }) => (
    <div
      role="region"
      id={`tabpanel-${id}`}
      aria-labelledby={`${id}`}
      className={isSelected ? styles.accordionTabPanel : ""}
      hidden={!isSelected}
    >
      {children}
    </div>
  );

const Tab = ({
  id,
  title,
  isSelected,
  onClick,
  onKeyDown,
  textColor,
  tabBackground,
}) => (
  <button
    role="tab"
    id={id}
    className={styles.tab}
    aria-controls={`tabpanel-${id}`}
    aria-selected={isSelected}
    onClick={() => onClick(id)}
    onKeyDown={(event) => onKeyDown(id, event)}
    tabIndex={isSelected ? 0 : -1}
    style={{
      color: textColor,
      backgroundColor: isSelected
        ? tabBackground.selected
        : tabBackground.default,
    }}
  >
    {title}
  </button>
);

const TabPanel = ({ id, isSelected, children, tabIndex }) => (
    <div
      role="tabpanel"
      id={`tabpanel-${id}`}
      aria-labelledby={`${id}`}
      className={isSelected ? styles.tabPanel : ""}
      hidden={!isSelected}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );

export const ReactTabsNestedAccordion = ({
  tabs,
  tabPanelTabindex,
  triggerActivation = "automated",
  textColor = "rgba(0, 0, 0, 1)",
  tabBackground = {
    default: "rgba(209, 203, 219, 1)",
    selected: "rgba(156, 39, 176, 1)",
  },
  viewportThreshold = 400,
}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [isAccordionView, setIsAccordionView] = useState(
    window.innerWidth < viewportThreshold
  );

  const handleWindowResize = () => {
    setIsAccordionView(window.innerWidth < viewportThreshold);
  };

  const windowResizeEvent = useRef(null);

  useEffect(() => {
    windowResizeEvent.current = handleWindowResize;
    window.addEventListener("resize", windowResizeEvent.current);
  
    // This line will force the accordion to update based on the new viewportThreshold value.
    setIsAccordionView(window.innerWidth < viewportThreshold);
  
    return () => {
      window.removeEventListener("resize", windowResizeEvent.current);
    };
  }, [viewportThreshold]);
  

  const handleKeyDown = (id, event) => {
    if (isAccordionView && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      setSelectedTab(id);
    } else if (!isAccordionView) {
      const currentIndex = tabs.findIndex((tab) => tab.id === id);

      // Remaining key event handling for Tab component

      if (event.key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % tabs.length;
        if (triggerActivation === "automated") {
          setSelectedTab(tabs[nextIndex].id);
        }
        document.getElementById(tabs[nextIndex].id).focus();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        if (triggerActivation === "automated") {
          setSelectedTab(tabs[prevIndex].id);
        }
        document.getElementById(tabs[prevIndex].id).focus();
      } else if (event.key === "Home") {
        event.preventDefault();
        if (triggerActivation === "automated") {
          setSelectedTab(tabs[0].id);
        }
        document.getElementById(tabs[0].id).focus();
      } else if (event.key === "End") {
        event.preventDefault();
        if (triggerActivation === "automated") {
          setSelectedTab(tabs[tabs.length - 1].id);
        }
        document.getElementById(tabs[tabs.length - 1].id).focus();
      } else if (
        (event.key === "Enter" || event.key === " ") &&
        triggerActivation === "manual"
      ) {
        event.preventDefault();
        setSelectedTab(id);
      }
    }
  };

  return (
    <div className={styles.tabContainer}>
      {isAccordionView ? (
        tabs.map(({ id, title, content }) => (
          <div key={id}>
            <AccordionButton
              id={id}
              title={title}
              isSelected={selectedTab === id}
              onClick={() => setSelectedTab(id)}
              onKeyDown={handleKeyDown}
              textColor={textColor}
              tabBackground={tabBackground}
            />
            <AccordionPanel key={id} id={id} isSelected={selectedTab === id}>
              {content}
            </AccordionPanel>
          </div>
        ))
      ) : (
        <>
          <div
            role="tablist"
            aria-label="HTML and ARIA information"
            className={styles.tabList}
          >
            {tabs.map(({ id, title }) => (
              <Tab
                key={id}
                id={id}
                title={title}
                isSelected={selectedTab === id}
                onClick={() => setSelectedTab(id)}
                onKeyDown={handleKeyDown}
                textColor={textColor}
                tabBackground={tabBackground}
              />
            ))}
          </div>
          {tabs.map(({ id, content }) => (
            <TabPanel
              key={id}
              id={id}
              isSelected={selectedTab === id}
              tabIndex={tabPanelTabindex ? 0 : undefined}
            >
              {content}
            </TabPanel>
          ))}
        </>
      )}
    </div>
  );
};