let productos = [
    {id:'1', name: 'cocina', precio: 10000, foto:'https://i.ibb.co/qYw8Zg1/coc1.jpg'},
    {id:'2', name: 'cocina', precio: 10000, foto:'https://i.ibb.co/mN0mFPG/coc2.jpg'},
    {id:'3', name: 'cocina', precio: 10000, foto:'https://i.ibb.co/JQQM5x8/coc3.jpg'},
    {id:'4', name: 'cocina', precio: 10000, foto:'https://i.ibb.co/qYw8Zg1/coc1.jpg'},
    {id:'5', name: 'dormitorio', precio: 10000, foto:'https://i.ibb.co/2vs4KpB/dor1.jpg'},
    {id:'6', name: 'dormitorio', precio: 10000, foto:'https://i.ibb.co/xM6f8hK/dor2.jpg'},
    {id:'7', name: 'dormitorio', precio: 10000, foto:'https://i.ibb.co/kgXqT58/dor3.jpg'},
    {id:'8', name: 'dormitorio', precio: 10000, foto:'https://i.ibb.co/Q8Cwg7B/dormitorio.jpg'},
    {id:'9', name: 'estudio', precio: 10000, foto:'https://i.ibb.co/L9NfBgw/est1.jpg'},
    {id:'10', name: 'estudio', precio: 10000, foto:'https://i.ibb.co/j5s6CDt/est2.jpg'},
    {id:'11', name: 'estudio', precio: 10000, foto:'https://i.ibb.co/BK6hJsS/est3.jpg'},
    {id:'12', name: 'estudio', precio: 10000, foto:'https://i.ibb.co/XJ3cbWg/estudio.jpg'},
    {id:'13', name: 'baño', precio: 10000, foto:'https://i.ibb.co/bbKTZhv/ba-1.jpg'},
    {id:'14', name: 'baño', precio: 10000, foto:'https://i.ibb.co/3znCw4t/ba-2.jpg'},
    {id:'15', name: 'baño', precio: 10000, foto:'https://i.ibb.co/Y8Mzx7Z/ba-3.jpg'},
    {id:'16', name: 'baño', precio: 10000, foto:'https://i.ibb.co/s15g6TC/ba-o.jpg'},
];

export const getFetch = (id) =>{

    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod=> prod.id === id))
            }else {
                resolve(productos)
            }
        },3000)
    })
}

let producto = {id:'1', name: 'cocina', precio: 10000, foto:'url:https://i.ibb.co/qYw8Zg1/coc1.jpg'}

export const getFetchOne = () =>{
        return new Promise( (resolve, reject)=>{
            setTimeout(()=>{
                resolve(producto)
            }, 3000)
        })

}