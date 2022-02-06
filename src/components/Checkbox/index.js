import React, { useState, useEffect } from "react";

const Checkbox = ({
	prefecture,
	selectedPrefs,
	selectPrefecture,
	deselectPrefecture,
}) => {
	const [checked, setChecked] = useState(false);

	useEffect(
		() => selectedPrefs.length === 0 && setChecked(false),
		[selectedPrefs]
	);

	return (
		<label className="checkbox">
			{prefecture.prefName}
			<input
				type="checkbox"
				checked={checked}
				onChange={() => {
					checked
						? deselectPrefecture(prefecture.prefCode)
						: selectPrefecture(prefecture);
					setChecked(!checked);
				}}
			/>
			<span className="checkmark"></span>
		</label>
	);
};

export default Checkbox;
