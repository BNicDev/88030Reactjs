import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { GetApi } from "./services/api";
import ListCard from "./listCard"; 

const ShowByCategory = () => {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const { cat } = useParams();

    useEffect(() => {
        setLoading(true);
        GetApi()
            .then((datos) => {
                const filtered = datos.filter(item => item.category === cat);
                setProducts(filtered);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [cat]);

    if (loading) return <div className="text-center p-10 text-white">Cargando {cat}...</div>;

    return (
        <div className="bg-[#1a1c20] min-h-screen p-8 mt-12">
            <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-blue-500 pb-2 inline-block capitalize">
                Categoría: {cat}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {products.length > 0 ? (
                    products.map((item) => (
                        <ListCard key={item.id} productos={item} />
                    ))
                ) : (
                    <p className="text-white">No hay productos en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

export default ShowByCategory;