import logoHome from "../../img/logo.svg"
import ImgHome from "../../img/img-home.svg"
import "./home.css"
import "../../styles/flex.css"
import "../../styles/sizes.css"
import "../../styles/fonts.css"
import "../../styles/colors.css"
import "../../styles/buttons.css"
import "../../styles/globalStyle.css"

export function MainHome() {
	return (
    <main className="mainHome flex items-center gap1">
        <section className="mainContent flex flex-col gap2">
            <div className="boxContent flex flex-col gap2">
                <img src={logoHome} alt="" className="logo" />
                <h1 className="titleContent font1 text-grey4">Centralize o controle das suas finanças</h1>
                <p className="textContent font5">de forma rápida e segura</p>
            </div>
            <button className="btnContent btn font3">Iniciar</button>
        </section>
        <section className="mainImg">
            <img className="imgCover" src={ImgHome} alt="" />
        </section>
    </main>
    );
}
