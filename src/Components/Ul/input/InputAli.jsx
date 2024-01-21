const Input = ({ type, value, setData }) => {
	return (
		<input
			type={type}
			value={value}
			onChange={(e) => {
				setData(e.target.value);
			}}
		/>
	);
};

export default Input;
