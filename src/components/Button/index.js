import "./styles.css";
import {useState} from "react"

const Button = ({ props }) => {
    const [count, setCount] = useState(0)
    return(
        <>
            <p className="countText">{count} {count === 0 ? "Unidade" : "Unidades" }</p>
            <button className="btn" onClick={() => setCount(count +1 )}>{props}</button>
        </>
    )
}

export default Button;