import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../muebles/getFetch";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)   
   
    useEffect(()=>{
        getFetch()
        .then((resp)=> {
                setProductos(resp)
                setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

   
   
    return (
        <div>
            { loading ? 
                <h1>Cargando...</h1>            
            :   
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemList productos={productos} />                   
                </div>             
            }
        </div>
    )
}

export default ItemListContainer