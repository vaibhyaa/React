/* eslint-disable react/react-in-jsx-scope */
import TabContent from "./TabContent";
import DifferentContent from "../DifferentContent";
import Tab from "./Tab";
import { useState } from "react";
import "../ReactTab.css";

export default function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        {/* <Tab num={0} activeTab={activeTab} onClick={setActiveTab} /> */}
        {/* num is a variable which stores the value like 0,1,2..
		   activateTab is state and setActiveTab is stateupdate function
       first for all tabs the activeTab state value is zero 
       when we lick on tab with num value 1 the tab passes the num value 1 and setActivaTab fun c=update the state to 1
		*/}
        <Tab num={1} activeTab={activeTab} onClicksetActiveTab={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClicksetActiveTab={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClicksetActiveTab={setActiveTab} />
        <Tab num={4} activeTab={activeTab} onClicksetActiveTab={setActiveTab} />
      </div>

      {activeTab < 4 ? (
        // here tabContent means tab component so instance is same every time when we got form tab to tab as it is in same position
        // we have to reset te state of every time new tab clicked the state needs to reset to normal
        // so for that key is important
        <TabContent
          item={content.at(activeTab - 1)}
          key={content.at(activeTab - 1).summary}
        />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

// | Prop                     | Value                            | Meaning                                                                                                             |
// | ------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
// | `num={0}`                | A number, `0`                    | The **index or ID** of this specific tab. For example, this might represent the "first" tab.                        |
// | `activeTab={activeTab}`  | A variable (probably a state)    | Represents the **currently selected tab number**. Passed so the `Tab` component knows whether it is the active one. |
// | `onClick={setActiveTab}` | A function (probably `useState`) | This function updates the `activeTab` state. When this tab is clicked, it will set the active tab to `num`.         |
