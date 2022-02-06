import { useState } from "react";

const Checkbox = ({ prefecture, selectPrefecture, deselectPrefecture }) => {
	const [checked, setChecked] = useState(false);

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
