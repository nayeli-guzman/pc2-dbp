export default function MainPage(){
    return(
    <div className="">
    <button className="bg-red-500 ml-5" onClick={<Cursos/>}>
        Añadir
    </button>
    <button className="bg-red-500 ml-5">
        Ver
    </button>
    <button className="bg-red-500 ml-5">
        Editar
    </button>
    <button className="bg-red-500 ml-5">
        Borrar
    </button>
    </div>)
}