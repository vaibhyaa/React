import { useState } from "react";
import "../ReactTab.css";

export default function Tab({ num, activeTab, onClicksetActiveTab }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClicksetActiveTab(num)}
    >
      Tab {num}
    </button>
  );
}
