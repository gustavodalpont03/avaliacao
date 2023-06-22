import { addDirector } from "@/app/model/DirectorService"
import React from "react"

export default function NewDirector() {
    async function saveDirector(formData: FormData){
        'use server'
        const name= formData.get ("name") as string
        const description= formData.get ("description") as string
        await addDirector(name, description)
    }
    return (
        <div>
            <h1 className="bg-slate-600 md:bg-red-700 xl:bg-green-600"> Cadastro de Diretores</h1>
            <form action={saveDirector}>
                <input type="text" name="name" placeholder="Digite o nome do diretor" />
                <input type="text" name="description" placeholder="Digite a descrição do diretor" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
        </form>
        </div>

    )
}