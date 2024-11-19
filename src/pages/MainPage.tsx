import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function MainPage() {
    const navigate = useNavigate()
    const [showInput, setShowInput] = useState(false); // Estado para mostrar el input
    const [number, setNumber] = useState(""); // Estado para almacenar el número
  


    return (
        <div className="space-y-4 p-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={()=>navigate("/post")}>
                Añadir
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Ver
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Editar
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                Borrar
            </button>

            {showInput && (
        <div className="mt-3">
          <input
            type="number"
            placeholder="Escribe un número"
            className="border border-gray-300 p-2 rounded"
            value={number}
            onChange={(e) => setNumber(e.target.value)} // Actualizar el número
          />
          <button
            className="ml-3 bg-blue-500 p-2 text-white rounded"
            onClick={() => navigate(`/get/${number}`)} // Redirigir con el número
          >
            Enviar
          </button>
            
        </div>)
        }
        </div>
        
    );
}