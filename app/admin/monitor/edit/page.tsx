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
        const description = formData.get ("description") as string;
        await updateDirectorById (id, name, description)
        redirect('/admin/director')
    }


    return (
        <>
        <h1> Editar Diretores </h1>
        <form action="">
                <input type="text" name="name" defaultValue={director.name} placeholder="Digite o nome do diretor" />
                <input type="text" name="description" defaultValue={director.description} placeholder="Digite descrição do diretor" />
                <button formAction={updateDirector} className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button formAction={deleteDirector} className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}