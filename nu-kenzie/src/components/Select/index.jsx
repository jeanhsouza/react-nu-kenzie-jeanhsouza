export function Select({ id, labelName, event }) {
	return (
		<>
			<label htmlFor={id} className="font6 text-grey1">
				{labelName}
			</label>
			<select
				onChange={event}
				id={id}
				className="selectTypeValue w-full input1 font6"
			>
				<option value="Entrada">Entrada</option>
				<option value="Despesa">Despesa</option>
			</select>{" "}
		</>
	);
}
