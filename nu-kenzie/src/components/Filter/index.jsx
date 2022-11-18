import "./styles.css";
import "../../styles/flex.css";
import "../../styles/sizes.css";
import "../../styles/globalStyle.css";

import { Button } from "../Button/buttons.jsx";

export function Filter({ card, setCard, filter, setFilter }) {
	function filterEntry() {
		const entry = filter.filter((elem) => {
			return elem.typeValue === "Entrada";
		});

		setCard(entry);
	}

	function filterExit() {
		const exit = filter.filter((elem) => {
			return elem.typeValue === "Despesa";
		});

		setCard(exit);
	}

	function filterAll() {
		setCard(filter);
	}

	return (
		<div className="filters flex justify-between items-center">
			<h2 className="titleFilter font3 text-grey1">Resumo financeiro</h2>
			<div className="btnsFilter flex gap3">
				<Button
					setStart={filterAll}
					text="Todos"
					classes="btnHeader btn2 font4"
				/>
				<Button
					setStart={filterEntry}
					text="Entradas"
					classes="btnHeader btn2 font4 text-grey1"
				/>
				<Button
					setStart={filterExit}
					text="Despesas"
					classes="btnHeader btn2 font4 text-grey1"
				/>
			</div>
		</div>
	);
}
