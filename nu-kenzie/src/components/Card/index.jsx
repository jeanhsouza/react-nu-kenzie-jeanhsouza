import btnTrash from "../../img/ButtonTrash.svg";
import "./styles.css";

export function Card({
	description,
	tag,
	value,
	card,
	setCard,
	filter,
	setFilter,
	elemCard,
}) {
	function removeCard(del) {
		const cardFilter = filter.filter((elem) => {
			return elem !== del;
		});

		const cardFilterAll = card.filter((elem) => {
			return elem !== del;
		});

		setCard(cardFilterAll);
		setFilter(cardFilter);
	}

	return tag === "Entrada" ? (
		<li className="card bg-sucess flex justify-end">
			<div className="cardContent bg-grey4 flex justify-between">
				<div className="cardDescription flex flex-col gap2">
					<h3 className="descriptionTitle font3">{description}</h3>
					<span className="descriptonTag font5">{tag}</span>
				</div>
				<div className="cardValues flex items-center justify-between">
					<span className="valuesText font5">
						{value.toLocaleString("pt-br", {
							style: "currency",
							currency: "BRL",
						})}
					</span>
					<img
						onClick={() => {
							removeCard(elemCard);
						}}
						src={btnTrash}
						alt=""
						className="btnTrash"
					/>
				</div>
			</div>
		</li>
	) : (
		<li className="card bg-alert flex justify-end">
			<div className="cardContent bg-grey4 flex justify-between">
				<div className="cardDescription flex flex-col gap2">
					<h3 className="descriptionTitle font3">{description}</h3>
					<span className="descriptonTag font5">{tag}</span>
				</div>
				<div className="cardValues flex items-center justify-between">
					<span className="valuesText font5">
						{(value*-1).toLocaleString("pt-br", {
							style: "currency",
							currency: "BRL",
						})}
					</span>
					<img
						onClick={() => {
							removeCard(elemCard);
						}}
						src={btnTrash}
						alt=""
						className="btnTrash"
					/>
				</div>
			</div>
		</li>
	);

	// <li className="card bg-sucess flex justify-end">
	// 	<div className="cardContent bg-grey3 flex justify-between">
	// 		<div className="cardDescription flex flex-col gap2">
	// 			<h3 className="descriptionTitle font3">{description}</h3>
	// 			<span className="descriptonTag font5">{tag}</span>
	// 		</div>
	// 		<div className="cardValues flex items-center justify-between">
	// 			<span className="valuesText font5">
	// 				{value.toLocaleString("pt-br", {
	// 					style: "currency",
	// 					currency: "BRL",
	// 				})}
	// 			</span>
	// 			<img onClick={()=> {removeCard(elemCard)}} src={btnTrash} alt="" className="btnTrash" />
	// 		</div>
	// 	</div>
	// </li>
}
