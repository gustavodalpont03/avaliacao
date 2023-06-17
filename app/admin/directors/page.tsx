import { getAllDirector } from "@/app/model/DirectorService";

export default async function DirectorPage(){
     const directors = await getAllDirector();
    return (
        <>
         <h1> Lista de Diretores</h1>
         <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {directors.map(directors => (  

                <tr key={directors.id}> <td>{directors.name}</td> <td>{directors.email}</td> <td><a href="/admin/directors/edit">Editar</a></td> </tr>

                ))}
            </tbody>
         </table>
        </>
       
    )
}