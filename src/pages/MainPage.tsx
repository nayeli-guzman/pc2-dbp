export default function MainPage() {
    return (
        <div className="space-y-4 p-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
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
        </div>
    );
}