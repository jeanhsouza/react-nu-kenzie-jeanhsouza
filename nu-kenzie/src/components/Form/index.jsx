import "./styles.css";
import "../Input/inputs.css";

import { useState } from "react";
import { Button } from "../Button/buttons.jsx";
import { Input } from "../Input";
import { Select } from "../Select";

export function Form({ setCard, setFilter }) {
	const [description, setDescription] = useState("");
	const [value, setValue] = useState(1);
	const [typeValue, setTypeValue] = useState("Entrada");

	function handleSubmit(event) {
		event.preventDefault();

		let card = {
			description,
			value: Number(value),
			typeValue,
		};

		typeValue === "Entrada"
			? (card = {
					description,
					value: Number(value),
					typeValue,
			  })
			: (card = {
					description,
					value: Number(value) * -1,
					typeValue,
			  });

		card.description !== "" && setCard((oldCard) => [...oldCard, card]);
		card.description !== "" && setFilter((oldCard) => [...oldCard, card]);

		const inputDescription = document.querySelector(".inputDescription");
		inputDescription.value = "";
		setDescription("");

		const inputValue = document.querySelector(".inputValue");
		inputValue.value = "";
		setValue("");
	}

	return (
		<form onSubmit={handleSubmit} className="formValues flex flex-col gap2">
			<div className="entryDescription flex flex-col gap3">
				<Input
					id="description"
					labelName="Descrição"
					inputType="text"
					placeholder="Digite aqui sua descrição"
					event={(event) => setDescription(event.target.value)}
				/>
			</div>
			<p className="footerTextDescription font6 text-grey2 ">
				Ex: Compra de roupas
			</p>
			<div className="formEntries flex items-center justify-between">
				<div className="entryValue flex flex-col gap3">
					<label htmlFor="value" className="font6 text-grey1">
						Valor
					</label>
					<div className="divInputValue flex items-center input1">
						<input
							onChange={(event) => setValue(event.target.value)}
							id="value"
							type="number"
							placeholder="1"
							className="inputValue font5 w-full"
						/>
						<p className="font5">R$</p>
					</div>
				</div>
				<div className="entryTypeValue flex flex-col gap3">
					<Select
						id="typeValue"
						labelName="Tipo de valor"
						event={(event) => setTypeValue(event.target.value)}
					/>
				</div>
			</div>
			<Button text="Inserir valor" classes="btnForm btn font4" />
		</form>
	);
}
