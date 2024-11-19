import { useState } from "react";
import {LoginRequest} from "../interfaces/LoginRequest"
import { login } from "../api";
import { RegisterRequest } from "../interfaces/RegisterRequest";

export default function RegisterPage() {

    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")

    
    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        const registerRequest: RegisterRequest = { password, email, fullName, username };

        try {
            await register(registerRequest);
            console.log('Register exitoso')
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