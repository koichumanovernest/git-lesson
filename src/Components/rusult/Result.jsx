import { useState } from "react";
import { Form } from "../from/Form";
import { List } from "../list/List";

export const Result = () => {
	const [state, setState] = useState([]);
	return (
		<div>
			<Form state={state} setState={setState} />
			<List state={state} />
		</div>
	);
};
