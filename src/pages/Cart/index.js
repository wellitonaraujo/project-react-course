import { Link } from "react-router-dom";
import cart from "../../assets/cart.png"
import trash from "../../assets/trash.jpeg"

import "./styles.css"

function Cart() {

  const onDelete = () => {
    alert("Deseja excluir esse item do carrinho?")
  }
    return (
      <>
        <div className="containerCart">
          <Link to="/" className="back">{"<  Voltar"}</Link>
          <h3 className="titleCart">Carrinho</h3>
          <img className="img" src={cart} />
         
        </div>
 
        <div className="listCart">
          <div className="cart">
            
          </div>

          <div className="trash" onClick={onDelete}>
              <img className="imgTrash" src={trash} />
          </div>
          
        </div>
      </>
    )
  }
  
  export default Cart;