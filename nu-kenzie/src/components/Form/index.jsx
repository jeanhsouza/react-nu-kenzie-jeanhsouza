import "./styles.css";
import "../Input/inputs.css";

import { useState } from "react";
import { Button } from "../Button/buttons.jsx";

export function Form({setCard,setFilter}) {
	const [description,setDescription] = useState("");
	const [value,setValue] = useState("");
	const [typeValue,setTypeValue] = useState("Entrada");

	function handleSubmit(event) {
        event.preventDefault();

        let card = {
			description,
            value:Number(value),
			typeValue
        }
		
		typeValue === "Entrada"? (
			card = {
			description,
			value:Number(value),
			typeValue
			
		}):
		(card = {
			description,
			value:Number(value)*-1,
			typeValue}
		)

		console.log(card)

        card.description!==""&& 
		setCard((oldCard) => [...oldCard, card])
		setFilter((oldCard) => [...oldCard, card])

        // setDescription('');
        // setValue('');
		// setTypeValue("")
    }


	return (
		<form onSubmit={handleSubmit} className="formValues flex flex-col gap2">
			<div className="entryDescription flex flex-col gap3">
                <label htmlFor="description"className="font6 text-grey1">Descrição</label>
                <input
					onChange={event => setDescription(event.target.value)}
                    id="description"
                    type="text"
                    className="inputDescription input1"
                    placeholder="Digite aqui sua descrição"
                />
            </div>
			<p className="footerTextDescription font6 text-grey2 ">Ex: Compra de roupas</p>
			<div className="formEntries flex items-center justify-between">
				<div className="entryValue flex flex-col gap3">
					<label htmlFor="value" className="font6 text-grey1">Valor</label>
					<div className="divInputValue flex items-center input1">
						<input
							onChange={event => setValue(event.target.value)}
							id="value"
							type="number"
							placeholder="1"
                            className="InputValue font5 w-full"
						/>
						<p className="font5">R$</p>
					</div>
				</div>
                <div className="entryTypeValue flex flex-col gap3">
					<label htmlFor="typeValue" className="font6 text-grey1">Tipo de valor</label>
					<select onChange={event => setTypeValue(event.target.value)} id="typeValue" className="selectTypeValue w-full input1 font6">
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Despesa</option>
                    </select>                    
				</div>
			</div>
            <Button text="Inserir valor" classes="btnForm btn font4"/>
		</form>
	);
}
