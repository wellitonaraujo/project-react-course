import "./styles.css";
import Button from "../Button"
import { useEffect, useState } from "react";
import api from "../../services/api"

function Product() {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  
    useEffect(() => {
      api.get("products").then((res) => {
        console.log(res.data)
        setProducts(res.data)
      })

    }, [])
  

    return (
       <div>
          <div className="box">
       
            {products.map(product => (
              <li key={product.id}>
                  <img src={product.image}/>
                  <p className="titleProduct">{product.title}</p>
                  <h3 className="titlePrice">R$ {product.price}</h3>
                  <Button props={"Adicionar ao carrinho"} />
              </li>
            ))}
    
          </div>
       </div>
    );
  }
  
  export default Product;