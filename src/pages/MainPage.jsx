import React from "react";
import "../index.css";
import ScrollableSections from "../ScrollableSections";

function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eeeeee] to-[#ffffff] dark:from-[#212121] dark:to-[#ffffff] bg-[length:100%_7000%] bg-no-repeat">
      <ScrollableSections />
    </div>
  );
}

export default MainPage;
