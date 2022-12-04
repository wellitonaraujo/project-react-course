import "./styles.css";
import {useState} from "react"

const Button = () => {
    const [count, setCount] = useState(0)

    function clickButton (event) {
        alert("Produto adicionado ao carrinho")
    }

    return(
        <>
        <p>{count} Unidades</p>
        <button className="btn" onClick={() => setCount(count +1 )}>Adicionar ao carrinho</button>
        </>
    )
}

export default Button;