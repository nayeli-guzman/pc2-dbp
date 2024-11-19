import { postProduct } from "../api"
import { ProductRequest } from "../interfaces/ProductRequest"

export default function CreateProductPage() {

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState(0.0)
    const [cantidad, setCantidad] = useState(0)
    const [url, setUrl] = useState("")
    
    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        const productRequest: ProductRequest = { nombre, descripcion, precio, cantidad, url };

        try {
            await postProduct(productRequest);
            console.log('Producto Creado con exito')
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input className="bg-slate-300" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <input className="bg-slate-300" placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <input className="bg-slate-300" placeholder="email" type="password" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input className="bg-slate-300" placeholder="fullName" type="password" onChange={(e)=>{setFullName(e.target.value)}}/>

            <button className="bg-orange-300" type="submit">Enviar</button>
        </form>
        </>
    )
}