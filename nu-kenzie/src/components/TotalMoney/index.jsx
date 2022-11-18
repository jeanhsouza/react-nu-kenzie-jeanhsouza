import "./styles.css"

export function TotalMoney({card}){    
   
    const totalValue = card.reduce((acc,actualValue)=>{
        return (acc + actualValue.value)
    },0)

    return(
        <div className="totalMoney flex flex-col gap3">
            <div className="totalContent flex justify-between items-center">
                <h3 className="totalText font3 text-grey1">Valor total:</h3>
                <span className="totalResult text-brand1 font3">{totalValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}</span>
            </div>
            <span className="font6 text-grey1">O valor se refere ao saldo</span>
        </div>
    )
}