import { useState } from "react";
import {LoginRequest} from "../interfaces/LoginRequest"
import { login } from "../api";

export default function LoginPage() {

    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    
    console.log(password, username)
    
    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        const loginData: LoginRequest = { username, password };

        try {
            await login(loginData);
            console.log('Loggeo exitoso')
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input className="bg-slate-300" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <input className="bg-slate-300" placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className="bg-orange-300" type="submit">Enviar</button>
        </form>
        </>
    )
}