import { deleteMonitorById, getMonitorById, updateMonitorById } from "@/app/model/MonitorService";
import {redirect} from 'next/navigation'
import React from "react";

export default async function EditMonitor(params:any){
    const id = params.searchParams.id;
    const monitor = await getMonitorById(id)

    async function deleteMonitor () { 
        'use server'
        await deleteMonitorById(id)
        redirect('/admin/monitor')
        
    }

    async function updateMonitor (formData: FormData) {
        'use server'
        const name = formData.get ("name") as string;
        const email = formData.get ("email") as string;
        await updateMonitorById (id, name, email)
        redirect('/admin/monitor') 
    }


    return (
        <>
        <h1> Editar Monitor</h1>
        <form action="">
                <input type="text" name="name" defaultValue={monitor.name} placeholder="Digite o nome do monitor" />
                <input type="text" name="email" defaultValue={monitor.email} placeholder="Digite o email do monitor" />
                <button formAction={updateMonitor} className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button formAction={deleteMonitor} className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}