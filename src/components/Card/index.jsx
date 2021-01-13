import './Card.css'
import {BuyButton} from '../../style'

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.img} alt=""/>
            <h3>{props.produto}</h3>
            <h4>R${props.valor.toFixed(2).replace(".", ",")}</h4>
            <BuyButton isPrimary={true}>Comprar</BuyButton>
        </div>
    )
}

export default Card