import "./App.css";
import {useState} from "react";
import { MainHome } from "./components/Home/home.jsx";
import { Header } from "./components/Header/header.jsx";
import { Dashboard } from "./components/Dashboard/dashboard.jsx";

function App() {
	const [start,setStart] = useState(false);	
    const [filterItems, setFilterItems] = useState([])	 
	const [card,setCard] = useState([])

	return (
		<div className="App">
			{start?<div><Header setStart={setStart}/> <Dashboard card={card} setCard={setCard} filter={filterItems} setFilter={setFilterItems}/></div>: <MainHome setStart={setStart}/>}
		</div>
	);
}

export default App;
