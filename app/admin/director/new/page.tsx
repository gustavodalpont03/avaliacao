import { addMonitor } from "@/app/model/MonitorService"
import React from "react"

export default function NewMonitor() {
    async function saveMonitor(formData: FormData){
        'use server'
        const name= formData.get ("name") as string
        const email= formData.get ("email") as string
        await addMonitor(name, email)
    }
    return (
        <div>
            <h1 className="bg-slate-600 md:bg-red-700 xl:bg-green-600"> Cadastro de Monitor</h1>
            <form action={saveMonitor}>
                <input type="text" name="name" placeholder="Digite o nome do monitor" />
                <input type="text" name="email" placeholder="Digite o email do monitor" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
        </form>
        </div>

    )
}