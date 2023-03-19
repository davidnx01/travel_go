import { useState } from 'react'
import React, { useEffect } from 'react'
import "./Packages.css"
import {HotDealsTab, BackpackTab, SouthAsiaTab} from "../../components/PackageTab/index"

const Packages = () => {

  const [currentTab, setCurrentTab] = useState(1);

  const tabs = [
    {
      id: 1,
      tabTitle: "Hot Details",
      content: <HotDealsTab />
    },
    {
      id: 2,
      tabTitle: "Backpack",
      content: <BackpackTab />
    },
    {
      id: 3,
      tabTitle: "South Asia",
      content: <SouthAsiaTab />
    },
    {
      id: 4,
      tabTitle: "Honeymoon",
      content: <HotDealsTab />
    },
    {
      id: 5,
      tabTitle: "Europe",
      content: <BackpackTab />
    },
    {
      id: 6,
      tabTitle: "More",
      content: <SouthAsiaTab />
    },
  ]

  const handleTabClick = (e) => {
    setCurrentTab(parseInt(e.target.id));
  }

  useEffect(() => {
    const activeTab = document.getElementById(currentTab);
    activeTab.classList.add('active-tab');
    return () => activeTab.classList.remove('active-tab');
  }, [currentTab]);

  return (
    <section id='packages'>
      <h2>Best Packages For You</h2>

        <div className='packages_wrap'>
          <div className='flex center-between packages_tabs'>
            {tabs.map((tab, i) => (
              <button
                key={i}
                id={tab.id}
                disabled={currentTab === tab.id}
                onClick={handleTabClick}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>

          <div className='pgc'>
            {tabs.map((tab, i) => (
              <div key={i}>
                {currentTab === tab.id &&
                <div className='flex center-between packages_content'>
                  {tab.content}
                </div>
                }
              </div>
            ))}
          </div>
        </div>      
    </section>
  )
}

export default Packages
