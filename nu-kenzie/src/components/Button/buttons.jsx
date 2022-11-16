import "./buttons.css"

export function Button ({text,classes}){
    return (<button className={classes}>{text}</button>)
}