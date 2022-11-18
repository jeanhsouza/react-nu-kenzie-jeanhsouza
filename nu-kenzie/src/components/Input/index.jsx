export function Input({ id, labelName, inputType, placeholder, event }) {
	return (
		<>
			<label htmlFor={id} className="font6 text-grey1">
				{labelName}
			</label>
			<input
				onChange={event}
				id={id}
				type={inputType}
				className="inputDescription input1"
				placeholder={placeholder}
			/>
		</>
	);
}
