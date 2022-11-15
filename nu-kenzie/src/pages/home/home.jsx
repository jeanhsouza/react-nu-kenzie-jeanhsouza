import logoHome from "../../img/logo.svg"
import ImgHome from "../../img/img-home.svg"
import "./home.css"
import "../../styles/flex.css"
import "../../styles/sizes.css"
import "../../styles/fonts.css"
import "../../styles/colors.css"
import "../../styles/buttons.css"

export function MainHome() {
	return (
    <main className="mainHome flex items-center gap1">
        <section className="mainContent flex flex-col gap2">
            <img src={logoHome} alt="" className="logo" />
            <h1 className="titleContent font1 text-grey4">Centralize o controle das suas finanças</h1>
            <p className="textContent font5">de forma rápida e segura</p>
            <button className="btnContent btn">Iniciar</button>
        </section>
        <section className="mainImg">
            <img className="imgCover" src={ImgHome} alt="" />
        </section>
    </main>
    );
}
