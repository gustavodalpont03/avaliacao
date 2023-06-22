import { sql } from "@vercel/postgres";

export async function getAllCoordinator() {
    const { rows:coordinators } = await sql`SELECT * from coordinator`;
    return coordinators
    
}
export async function addCoordinator(name:string, email:string) {
    await sql`INSERT INTO coordinator(name, email) VALUES (${name}, ${email})`;
    
}
export async function deleteCoordinatorById(id:string) {
    await sql`DELETE FROM coordinator WHERE id=${id}`;
    
}
export async function getCoordinatorById(id:string) {
   const {rows:coordinators} = await sql`SELECT * FROM coordinator WHERE id=(${id})`
   return coordinators[0]
}
export async function updateCoordinatorById(id:string, name:string, email:string) {
    await sql `UPDATE coordinator SET name=${name}, email =${email} WHERE id=${id}`
 }
