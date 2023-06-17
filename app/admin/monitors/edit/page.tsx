import { deleteMonitors, getMonitorById, updateMonitorById } from "@/app/model/MonitorService";
import {redirect} from 'next/navigation'

export default async function EditMonitor(params:any){
    const id = params.searchParams.id;
    const student = await getMonitorById(id)

    async function deleteMonitor(){
        'use server';
        await deleteMonitors(id)
        redirect('/admin/student')
    }
    async function updateMonitor(formData: FormData){
        'use server'
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        await updateMonitorById(id, name, email)
        redirect('/admin/monitor')
    }
    return(
        <>
        <h1>Editar Monitores</h1>
        <form action="">
                <input type="text" name="name" placeholder="Digite o nome do Monitor" />
                <input type="text" name="email" placeholder="Digite o Email do Monitor" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button type="submit" className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}