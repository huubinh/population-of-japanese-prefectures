import { useState } from "react";

const Checkbox = ({ prefecture, selectPrefecture, deselectPrefecture }) => {
	const [checked, setChecked] = useState(false);

	return (
		<div className="checkbox">
			<label>
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
				{prefecture.prefName}
			</label>
		</div>
	);
};

export default Checkbox;
