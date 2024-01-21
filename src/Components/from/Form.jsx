import { useState } from "react";
import Input from "../Ul/input/InputAli";
import Button from "../Ul/button/ButtonAli";

export const Form = ({ state, setState }) => {
	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
	function inpitValue() {
		const data = {
			input1: value1,
			input2: value2,
		};
		setState([...state, data]);
		setValue1("");
		setValue2("");
	}
	return (
		<div>
			<Input type="text" value={value1} setData={setValue1} />
			<Input type="url" value={value2} setData={setValue2} />
			<Button text="Add" onClick={inpitValue} />
		</div>
	);
};
