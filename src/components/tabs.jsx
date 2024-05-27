import React, { useState, useEffect } from "react";
import { tabsData, imagesData } from "./data";
import "./tabs.css"; // Assuming you have a CSS file for styles

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    document.title = tabsData[activeTab].label;
  }, [activeTab]);

  return (
    <div>
      <ul className="tabs">
        {tabsData.map((tab, index) => (
          <li
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="contents">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`box ${activeTab === index ? "show" : "hide"}`}
            data-content={index}
          >
            <img src={imagesData[index]} alt="" />
            <div>
              <h3>Lorem ipsum dolor</h3>
              <p>{tab.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
