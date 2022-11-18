import noCard from "../../img/nocard.svg";

import "./dashboard.css";
import "../../styles/flex.css";
import "../../styles/globalStyle.css";

import { Filter } from "../Filter";
import { Form } from "../Form";
import { TotalMoney } from "../TotalMoney";
import { Card } from "../Card";

export function Dashboard({ card, setCard, filter, setFilter }) {
	return (
		<main className="mainDash container flex justify-between gap2">
			<section className="values flex flex-col gap2">
				<Form setCard={setCard} setFilter={setFilter} />
				{card.length !== 0 && <TotalMoney card={card} />}
			</section>
			<section className="list">
				<Filter
					card={card}
					setCard={setCard}
					filter={filter}
					setFilter={setFilter}
				/>
				{card.length !== 0 ? (
					<ul className="listCards mg-top2 flex flex-col gap2">
						{card.map((elem, index) => {
							return (
								<Card
									key={index}
									description={elem.description}
									tag={elem.typeValue}
									value={elem.value}
									card={card}
									setCard={setCard}
									filter={filter}
									setFilter={setFilter}
									elemCard={elem}
								/>
							);
						})}
					</ul>
				) : (
					<div className="noCard flex flex-col mg-top2 gap2">
						<h2 className="titleNoCard">
							Você ainda não possui nenhum lançamento
						</h2>
						<img src={noCard} alt="" className="imgNoCard" />
					</div>
				)}
			</section>
		</main>
	);
}
