import ListCard from "./listCard";

const ItemList = ({products})=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {products.map((item)=>(
                <ListCard key={item.id} productos={item}/>
            ))}
        </div>
    )
}

export default ItemList;