import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    function sumarItem(){

        if(count < stock){
            setCount(count + 1)
        }
    }
    function restarItem (){
        if (count > 1){
            setCount(count - 1)
        }
    }

    const agregar = () => {
        onAdd(count)
    }
    return (
        <>
            <div>{count}</div>
            <button onClick={sumarItem}>Sumar Producto</button>
            <button onClick={restarItem}>Remover Producto</button>
            <button onClick={()=>onAdd(count)}>Agregar</button>
        </>
    )
}

export default ItemCount