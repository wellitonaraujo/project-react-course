import { Link } from "react-router-dom";
import cart from "../../assets/cart.png"

import "./styles.css"

function Cart() {
    return (
      <div className="containerCart">
        <Link to="/" className="back">{"< Voltar"}</Link>
        <h3 className="titleCart">Carrinho</h3>
        <img className="img" src={cart} />
      </div>
    )
  }
  
  export default Cart;