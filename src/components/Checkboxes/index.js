import React from "react";
import Checkbox from "../Checkbox";
import ResetButton from "../ResetButton";

const Checkboxes = ({
	prefectures,
	selectedPrefs,
	selectPrefecture,
	deselectPrefecture,
	reset,
}) => {
	return (
		<div className="container">
			<section id="checkboxes">
				{prefectures.map((prefecture) => {
					return (
						<Checkbox
							key={prefecture.prefCode}
							prefecture={prefecture}
							selectedPrefs={selectedPrefs}
							selectPrefecture={selectPrefecture}
							deselectPrefecture={deselectPrefecture}
						/>
					);
				})}
				<ResetButton reset={reset} />
			</section>
		</div>
	);
};

export default Checkboxes;
