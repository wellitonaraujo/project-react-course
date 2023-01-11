import { Link } from "react-router-dom";
import Product from "../../components/Product"
import "./styles.css"
import cart from "../../assets/cart.png"

function ListProducts() {
    return (
      <div>

        <div  className="containerCart">
          <h1 className="ecommerceTitle">Aditum Ecommerce</h1>
          <Link className="linkcart" to="/cart"><img className="img" src={cart}/></Link>
        </div>

        <div className="container">
          <Product/>
        </div>
        
      </div>
    );
  }
  
  export default ListProducts;