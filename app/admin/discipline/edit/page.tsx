import { deleteDisciplineById, getDisciplineById, updateDisciplineById } from "@/app/model/DisciplineService";
import {redirect} from 'next/navigation'

export default async function EditDiscipline(params:any){
    const id = params.searchParams.id;
    const discipline = await getDisciplineById(id)

    async function deleteDiscipline () {
        
        'use server'
        await deleteDisciplineById(id)
        redirect('/admin/discipline')
        
    }

    async function updateDiscipline (formData: FormData) {
        'use server'
        const name = formData.get ("name") as string;
        const description = formData.get ("description") as string;
        await updateDisciplineById (id, name, description)
        redirect('/admin/discipline')
    
        
    }


    return (
        <>
        <h1> Editar Discipline </h1>
        <form action="">
                <input type="text" name="name" defaultValue={discipline.name} placeholder="Digite o nome da disciplina" />
                <input type="text" name="description" defaultValue={discipline.description} placeholder="Digite descrição da discplina" />
                <button formAction={updateDiscipline} className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button formAction={deleteDiscipline} className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )

}