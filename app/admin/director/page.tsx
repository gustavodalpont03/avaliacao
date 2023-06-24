import { getAllDirector } from "@/app/model/DirectorService"

export const revalidate = 0

export default async function DirectorPage() {
    const directors = await getAllDirector()
    return (
        <>
            <h1> Lista de Diretores </h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {directors.map(director => (
                            <tr key= {director.id}><td>{director.name}</td> <td>{director.email}</td> <td><a href={`/admin/director/edit?id=${director.id}`}>Editar</a></td></tr>
                        ))}
                </tbody>
            </table>
        </>


    )
}