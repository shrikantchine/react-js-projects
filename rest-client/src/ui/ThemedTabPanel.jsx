import React, { useState } from "react";

const activeTabLinkClasses =
  "inline-block p-4 text-teal-600 border-b-2 border-teal-600 rounded-t-lg active dark:text-teal-500 dark:teal-blue-500";

const inActiveTabLinkClasses =
  "inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300";

const ThemedTabPanel = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
      <ul className="-mb-px flex flex-wrap">
        {items.map((data, index) => (
          <li className="me-2" key={index}>
            <a
              href="#"
              className={`${index === activeIndex ? activeTabLinkClasses : inActiveTabLinkClasses}`}
              onClick={() => handleTabLinkClick(index)}
            >
              {data.key}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-2 min-h-40 rounded border border-gray-300">
        {items[activeIndex].value}
      </div>
    </div>
  );
};

export default ThemedTabPanel;
