import "./App.css";
import {useState} from "react";
import { MainHome } from "./components/Home/home.jsx";
import { Header } from "./components/Header/header.jsx";
import { Dashboard } from "./components/Dashboard/dashboard.jsx";

function App() {
	const [start,setStart] = useState(false);

	return (
		<div className="App">
			{start?<div><Header setStart={setStart}/> <Dashboard/></div>: <MainHome setStart={setStart}/>}
		</div>
	);
}

export default App;
