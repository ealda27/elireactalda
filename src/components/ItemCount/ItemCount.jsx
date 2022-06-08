import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({productos}) => {

    const [count, setCount] = useState(0);

    const agregarItem = () => count >= 0  ? setCount(count + 1) : null;
    const removerItem = () => count > 0 ? setCount(count - 1) : null;

    return (
        <>
            <div className="countContainer">
                <button className="btn btn-primary" onClick={agregarItem}>+</button>
                <h3>{count}</h3>
                <button className="btn btn-primary"  onClick={removerItem}>-</button>
            </div>
            <div className="agregarCarrito">
                <p>Agregar a carrito</p>
            </div>
        </>
    )
}

export default ItemCount