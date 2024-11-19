import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function MainPage(){
    const navigate = useNavigate();
    const [showInput, setShowInput] = useState(false); // Estado para mostrar el input
    const [number, setNumber] = useState(""); // Estado para almacenar el número  

    return(
    <div className="">
    <button className="bg-red-500 ml-5" onClick={()=>{navigate("/add")}}>
        Añadir
    </button>
    <button className="bg-red-500 ml-5" onClick={()=>{navigate("/get")}}>
        Ver
    </button>
    <button className="bg-red-500 ml-5" onClick={()=>{navigate("/edit")}}>
        Editar
    </button>
    <button className="bg-red-500 ml-5" onClick={()=>{navigate("/delete")}}>
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
            onClick={() => navigate(`/get/${number}`)} 
          >
            Enviar
          </button>

    </div>)
}