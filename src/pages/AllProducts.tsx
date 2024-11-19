import { useEffect, useState } from "react"
import { paginationProducts } from "../api"

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }

export default function AllProducts(){
    const [products, setProducts] =  useState<Product[]>([]);
    const [skip, setSkip] = useState(0)
    const limit=10

    useEffect(()=>{
        const loadProducts = async () => {
            try {
                const response = paginationProducts(skip, limit);
                setProducts(response);
            } catch (error) {
                console.error(error)
            }
        }

        loadProducts();

    },[skip])

    const handleNext = () => {
        setSkip(skip + limit);
      };
    
      const handlePrevious = () => {
        if (skip >= limit) {
          setSkip(skip - limit);
        }
      };

      return(
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-4">Todos los Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded cursor-pointer"
                onClick={() => navigate(`/productos/${product.id}`)}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-2"
                />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p>{product.description}</p>
                <p className="text-green-500 font-bold">${product.price}</p>
                <p>Cantidad: {product.quantity}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              className="bg-blue-500 text-white p-2 rounded"
              disabled={skip === 0}
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Siguiente
            </button>
          </div>
        </div>
      );
}