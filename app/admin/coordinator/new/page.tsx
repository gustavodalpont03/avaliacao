import { addCoordinator } from "@/app/model/CoordinatorService"

export default function NewCoordinator() {
    async function saveCoordinator(formData: FormData){
        'use server'
        console.log ("Teste")
        const name= formData.get ("name") as string
        const email= formData.get ("email") as string
        await addCoordinator(name, email)
    }
    return (
        <div>
            <h1 className="bg-slate-600 md:bg-red-700 xl:bg-green-600"> Cadastro de Coodernador</h1>
            <form action={saveCoordinator}>
                <input type="text" name="name" placeholder="Digite o nome do coordenador" />
                <input type="text" name="email" placeholder="Digite o email do coordenador" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
        </form>
        </div>

    )
}