export default function MainPage() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-blue-900 to-blue-600 text-white space-y-6 p-4"
        >
            {/* Título principal */}
            <h1 className="text-4xl font-bold bg-blue-800 p-4 rounded shadow-lg">
                UTEC
            </h1>

            {/* Botones */}
            <div className="space-y-4">
                <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 shadow-lg">
                    Añadir
                </button>
                <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 shadow-lg">
                    Ver
                </button>
                <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 shadow-lg">
                    Editar
                </button>
                <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600 shadow-lg">
                    Borrar
                </button>
            </div>
        </div>
    );
}
