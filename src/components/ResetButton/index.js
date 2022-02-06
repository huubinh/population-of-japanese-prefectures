import React from "react";

const ResetButton = ({ reset }) => {
	return (
		<label id="reset-container">
			<button id="reset-button" onClick={reset}></button>リセット
		</label>
	);
};

export default ResetButton;
