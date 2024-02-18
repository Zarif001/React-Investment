import React from "react";
function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment </label>
          <input
            type="number"
            required
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return </label>
          <input
            type="number"
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
            required
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="">Duration </label>
          <input
            type="number"
            required
            onChange={(e) => onChangeInput("duration", e.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
export default UserInput;
