import React from "react";
import Checkbox from "../Checkbox";

const Checkboxes = ({ prefectures, selectPrefecture, deselectPrefecture }) => {
	return (
		<section id="checkboxes">
			<div className="container">
				{prefectures.map((prefecture) => {
					return (
						<Checkbox
							key={prefecture.prefCode}
							prefecture={prefecture}
							selectPrefecture={selectPrefecture}
							deselectPrefecture={deselectPrefecture}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Checkboxes;
