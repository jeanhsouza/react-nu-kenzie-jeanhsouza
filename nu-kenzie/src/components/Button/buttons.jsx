import "./buttons.css";

export function Button({ text, classes, setStart }) {
	return (
		<button onClick={setStart} className={classes}>
			{text}
		</button>
	);
}
