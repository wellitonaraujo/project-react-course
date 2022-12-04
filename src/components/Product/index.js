import "./styles.css";
import smartphone from "../../assets/smartphone.jpg"
import Button from "../Button"

function Product({ title, price, img }) {
    return (
       <div className="contaider">
        <img src={smartphone} className="img"/>
          <p className="title">{title}</p>
          <h3 className="price">{price}</h3>
         <Button />
       </div>
    );
  }
  
  export default Product;