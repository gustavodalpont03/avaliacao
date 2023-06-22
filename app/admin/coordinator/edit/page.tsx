import { deleteCoordinatorById, getCoordinatorById, updateCoordinatorById } from "@/app/model/CoordinatorService";
import {redirect} from 'next/navigation'

export default async function EditCoordinator(params:any){
    const id = params.searchParams.id;
    const coordinator = await getCoordinatorById(id)

    async function deleteCoordinator () {
        
        'use server'
        await deleteCoordinatorById(id)
        redirect('/admin/coordinator')
        
    }

    async function updateCoordinator (formData: FormData) {
        'use server'
        const name = formData.get ("name") as string;
        const email = formData.get ("email") as string;
        await updateCoordinatorById (id, name, email)
        redirect('/admin/coordinator')
    
        
    }


    return (
        <>
        <h1> Editar Coordenador</h1>
        <form action="">
                <input type="text" name="name" defaultValue={coordinator.name} placeholder="Digite o nome do coordenador" />
                <input type="text" name="email" defaultValue={coordinator.email} placeholder="Digite o email do coordenador" />
                <button formAction={updateCoordinator} className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button formAction={deleteCoordinator} className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )

}