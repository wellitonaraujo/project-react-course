import Product from "../../components/Product"
import "./styles.css"

function ListProducts() {
    return (
      <>
      <h1 className="ecommerceTitle">Aditum Ecommerce</h1>
      <div className="container">
          <Product price={"R$ 1.000,00"} title={"Smartphone XPTO Dual Chip"}/>
          <Product price={"R$ 500,00"} title={"Smartphone MotoG"}/>
          <Product price={"R$ 7.300,00"} title={"iPhone 14 Max Pro"}/>
       </div>
      </>
    );
  }
  
  export default ListProducts;