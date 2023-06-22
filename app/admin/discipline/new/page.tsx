import { addDiscipline } from "@/app/model/DisciplineService"

export default function NewDiscipline() {
    async function saveDiscipline(formData: FormData){
        'use server'
        console.log ("Entrou na função")
        const name= formData.get ("name") as string
        const description= formData.get ("description") as string
        await addDiscipline(name, description)
    }
    return (
        <div>
            <h1 className="bg-slate-600 md:bg-red-700 xl:bg-green-600"> Cadastro de Disciplina</h1>
            <form action={saveDiscipline}>
                <input type="text" name="name" placeholder="Digite o nome da disciplina" />
                <input type="text" name="description" placeholder="Digite a descrição da disciplina" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
        </form>
        </div>

    )
}