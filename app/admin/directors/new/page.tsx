import { addDirectors } from "@/app/model/DirectorService"

export default function NewDirector() {
    async function saveDirector(formData: FormData){
        'use server'
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        await addDirectors(name, email)
    }
    return (
        <>
            <h1 className="bg-slate-600 md:bg-red-700 xl:bg-green-600">Cadastro de Diretores</h1>
            <form action={saveDirector}>
                <input type="text" name="name" placeholder="Digite o nome do Diretor" />
                <input type="text" name="email" placeholder="Digite o E-mail do Diretor" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
            </form>
        </>

    )
}