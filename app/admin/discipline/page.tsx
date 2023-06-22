import { getAllDiscipline } from "@/app/model/DisciplineService"

export const revalidate = 0

export default async function DisciplinePage() {
    const disciplines = await getAllDiscipline()
    return (
        <>
            <h1> Lista de disciplinas </h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplines.map(discipline => (
                            <tr key= {discipline.id}><td>{discipline.name}</td> <td>{discipline.description}</td> <td><a href={`/admin/discipline/edit?id=${discipline.id}`}>Editar</a></td></tr>
                        ))}
                </tbody>
            </table>
        </>


    )
}