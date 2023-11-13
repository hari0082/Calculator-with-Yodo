import React from "react";

const OutputComp = ({ updatedInputValue, selectedPlan }) => {
  return (
    <div className="mb-4 text-center">
      {selectedPlan === 2.5 && (
        <div className="text-blue-900">
          <p>1 year with the Free Plan is €{updatedInputValue * 0.025}</p>
          <p>3 years with the Free Plan is €{updatedInputValue * 0.025 * 3}</p>
          <p>6 years with the Free Plan is €{updatedInputValue * 0.025 * 6}</p>
        </div>
      )}

      {selectedPlan === 4.5 && (
        <div className="text-blue-600 ">
          <p>1 year with the Good Plan is €{updatedInputValue * 0.05}</p>
          <p>3 years with the Good Plan is €{updatedInputValue * 0.05 * 3}</p>
          <p>6 years with the Good Plan is €{updatedInputValue * 0.05 * 6}</p>
        </div>
      )}
    </div>
  );
};

export default OutputComp;
