import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-text">Producto: {item.producto} </p>
                    <p className="card-text">Tipo: {item.tipo} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount stock= {item.stock}/><br/>
                    <button className="btn btn-secondary">Terminar Compra</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default ItemDetail;