import { getAllMonitor } from "@/app/model/MonitorService";

export default async function MonitorPage(){
     const monitors = await getAllMonitor();
    return (
        <>
         <h1> Lista de Monitores</h1>
         <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {monitors.map(monitors => (  

                <tr key={monitors.id}> <td>{monitors.name}</td> <td>{monitors.email}</td> <td><a href="/admin/student/edit">Editar</a></td> </tr>

                ))}
            </tbody>
         </table>
        </>
       
    )
}