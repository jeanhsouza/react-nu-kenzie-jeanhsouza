import logoHeader from "../../img/logo2.svg";

import "./header.css"
import "../../styles/flex.css"
import "../../styles/globalStyle.css"

import { Button } from "../Button/buttons.jsx";

export function Header ({setStart}){
    return (
        <header className="headerDash">
            <div className="headerMenu container flex justify-between">
            <img src={logoHeader} alt="" className="headerLogo" />
            <Button setStart={()=>setStart(false)} text="Início" classes="btnHeader btn2 font3"/>
            {/* <button onClick={()=>setStart(false)}className="btnHeader btn2 font3">Ínicio</button> */}
            </div>
        </header>
    )
}