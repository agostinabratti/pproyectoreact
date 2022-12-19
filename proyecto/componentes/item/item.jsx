const Item = ({prod}) => {
    return (
        <div className='card mb-3 cardProducto border-light'>
                        <img src={`../img/${prod.img}`}className="card-img-top" alt="..." />
                        <div className='card-body cardBody'>
                            <h5 className="card-title">{prod.producto}</h5>
                            <p className="card-text">*{prod.tipo}*</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-primary'>Ver Productos</button>
                        </div>
        </div>
    );
}

export default Item;