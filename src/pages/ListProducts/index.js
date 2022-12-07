import { Link } from "react-router-dom";
import Product from "../../components/Product"
import "./styles.css"

function ListProducts() {
    return (
      <div>
      <h1 className="ecommerceTitle">Aditum Ecommerce</h1>

      <Link to="/cart">Carrinho</Link>
      
      <div className="container">
          <Product price={"R$ 1.000,00"} title={"Smartphone XPTO Dual Chip"}/>
          <Product price={"R$ 500,00"} title={"Smartphone MotoG"}/>
          <Product price={"R$ 7.300,00"} title={"iPhone 14 Max Pro"}/>
       </div>
      </div>
    );
  }
  
  export default ListProducts;