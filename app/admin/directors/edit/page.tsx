import { deleteDirectorsById, getDirectorById, updateDirectorById } from "@/app/model/DirectorService";
import {redirect} from 'next/navigation'

export default async function EditDirector(params:any){
    const id = params.searchParams.id;
    const student = await getDirectorById(id)

    async function deleteDirector(){
        'use server';
        await deleteDirectorsById(id)
        redirect('/admin/directors')
    }
    async function updateDirector(formData: FormData){
        'use server'
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        await updateDirectorById(id, name, email)
        redirect('/admin/directors')
    }
    return(
        <>
        <h1>Editar Diretores</h1>
        <form action="">
                <input type="text" name="name" placeholder="Digite o nome do Diretor" />
                <input type="text" name="email" placeholder="Digite o Email do Diretor" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button type="submit" className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}