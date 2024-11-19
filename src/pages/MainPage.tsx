import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function MainPage() {
    const navigate = useNavigate()
    const [showInput, setShowInput] = useState(false); // Estado para mostrar el input
    const [number, setNumber] = useState(""); // Estado para almacenar el número
  


    return (
        <div className="min-h-screen flex flex-col items-center bg-white text-gray-800">
            {/* Header con logo y título */}
            <header className="w-full bg-blue-900 text-white py-4 shadow-md">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
                    <h1 className="text-3xl font-bold tracking-wide">
                        UTEC Perú
                    </h1>
                    <p className="text-sm italic">Innovación en Ingeniería</p>
                </div>
            </header>

            {/* Contenido principal */}
            <main className="flex-grow flex flex-col items-center justify-center space-y-6 py-10 px-4">
                <h2 className="text-2xl font-semibold text-blue-900">
                    Portal de Gestión
                </h2>
                <div className="space-y-4">
                    <button className="bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-800 shadow-md"
                onClick={()=>navigate("/post")}>
                        Añadir
                    </button>
                    <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 shadow-md"
                onClick={()=>{setShowInput(true)}}>
                        Ver
                    </button>
                    <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 shadow-md"
            onClick={()=>{setShowInput(true)}}>
                        Editar
                    </button>
                    <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 shadow-md"
            onClick={()=>{setShowInput(true)}}>
                        Borrar
                    </button>

            {showInput && (
        <div className="mt-3">
          <input
            type="number"
            placeholder="Escribe un número"
            className="border border-gray-300 p-2 rounded"
            value={number}
            onChange={(e) => setNumber(e.target.value)} 
          />
          <button
            className="ml-3 bg-blue-500 p-2 text-white rounded"
            onClick={() => {setShowInput(false);navigate(`/get/${number}`)}} 
          >
            Enviar
          </button>
        </div>)
        }
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-gray-100 py-4">
                <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
                    © {new Date().getFullYear()} UTEC Perú. Todos los derechos reservados.
                </div>
            </footer>
        </div>
        
    );
}
