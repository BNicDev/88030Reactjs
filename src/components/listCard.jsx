import CardDescription from "./services/listCardDescription";


const ListCard = ({ productos }) => { 

    const HandleClick =()=>{
        <CardDescription items = {productos}/>

    }



    return (
        <div className="w-full sm:w-72 bg-[#202226] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden m-4">
            
            {productos.image && (
                <img src={productos.image} alt={productos.title} className="w-full h-48 object-contain" />
                )}
            
            <div className="p-5 text-left">
                <p className="text-xl font-bold text-white-800 truncate mb-2">{productos.title}</p>
                <p className="text-3xl font-extrabold text-white-600 mb-4">${productos.price}</p>
                <button onClick={HandleClick} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-150 ease-in-out shadow-md">see more</button>
            </div>
        </div>
    );
}

export default ListCard;