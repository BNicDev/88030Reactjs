const ListCard=(products)=>{
    console.log(products)
    return(
        <>
            <div>
                <p>{products.productos.title}</p>
                <img src={products.productos.image}/>
            </div>
        
        </>
    )
}

export default ListCard