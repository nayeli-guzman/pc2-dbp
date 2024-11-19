import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProgramaById } from "../api";
import { ProgramaRequest } from "../dtos/ProgramaRequest";

export default function GetPage() {
  const { number } = useParams<{ number: string }>(); // Captura el parámetro de la URL
  const [data, setData] = useState<ProgramaRequest | null>(null); // Estado para guardar los datos

  return (
    <div className="p-5">
      <h2>Código: {data?.codigo}</h2>
      <h2>Nombre: {data?.nombre}</h2>
      <h2>Creditos: {data?.creditos}</h2>
    </div>
  );
}
