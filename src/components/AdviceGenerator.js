import React, { useState } from "react";
import diceIcons from "../assets/icon-dice.svg";
import dividerDesktop from "../assets/pattern-divider-desktop.svg"
import dividerMobile from "../assets/pattern-divider-mobile.svg"
import "./AdviceGenerator.css"

const AdviceGenerator = () => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="card-container">
        <main className="card">
          <div className="advice-tag">ADVICE #117</div>
          <div className="advice">
            "It is easy to sit up and take notice, what's difficult is getting
            up and taking action."
          </div>
          <div className="advice-footer">
          </div>
          <div className="dice-icon-container">
            <img src={diceIcons} alt="Dice Icon" className="dice-icon" />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdviceGenerator;
