import React, { useState } from "react";
import styles from "./TabComponent.module.css";

const Tab = ({ id, title, isSelected, onClick, onKeyDown, textColor, tabBackground }) => (
  <button
    role="tab"
    id={id}
    aria-controls={`${id}-tabpanel`}
    aria-selected={isSelected}
    onClick={() => onClick(id)}
    onKeyDown={(event) => onKeyDown(id, event)}
    tabIndex={isSelected ? 0 : -1}
    style={{
      color: textColor,
      backgroundColor: isSelected ? tabBackground.selected : tabBackground.default,
    }}
  >
    {title}
  </button>
);

const TabPanel = ({ id, isSelected, children, tabIndex }) => (
  <div
    role="tabpanel"
    id={`tabpanel-${id}`}
    aria-labelledby={`tab-${id}`}
    hidden={!isSelected}
    tabIndex={tabIndex}
  >
    {children}
  </div>
);

export const TabComponent = ({
  tabs,
  tabPanelTabindex,
  triggerActivation = "automated",
  textColor = "rgba(0, 0, 0, 1)",
  tabBackground = {
    default: "rgba(209, 203, 219, 1)",
    selected: "rgba(156, 39, 176, 1)",
  },
}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleKeyDown = (id, event) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === id);
    
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
      };

  return (
    <div className={styles.tabContainer}>
    <div role="tablist" aria-label="HTML and ARIA information" className={styles.tabList}>
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
    </div>
  );
};