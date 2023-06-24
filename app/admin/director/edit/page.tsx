import { deleteDirectorById, getDirectorById, updateDirectorById } from "@/app/model/DirectorService";
import {redirect} from 'next/navigation'
import React from "react";

export default async function EditDirector(params:any){
    const id = params.searchParams.id;
    const director = await getDirectorById(id)

    async function deleteDirector () { 
        'use server'
        await deleteDirectorById(id)
        redirect('/admin/director')
        
    }

    async function updateDirector (formData: FormData) {
        'use server'
        const name = formData.get ("name") as string;
        const email = formData.get ("email") as string;
        await updateDirectorById (id, name, email)
        redirect('/admin/director') 
    }


    return (
        <>
        <h1> Editar Director</h1>
        <form action="">
                <input type="text" name="name" defaultValue={director.name} placeholder="Digite o nome do diretor" />
                <input type="text" name="email" defaultValue={director.email} placeholder="Digite o email do diretor" />
                <button formAction={updateDirector} className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button formAction={deleteDirector} className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}