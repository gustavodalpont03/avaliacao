import { sql } from "@vercel/postgres";

export async function getAllMonitor() {
    const { rows:monitors } = await sql`SELECT * from monitor`;
    return monitors
    
}
export async function addMonitor(name:string, email:string) {
    await sql`INSERT INTO monitor(name, email) VALUES (${name}, ${email})`;
    
}
export async function deleteMonitorById(id:string) {
    await sql`DELETE FROM monitor WHERE id=${id}`;
    
}
export async function getMonitorById(id:string) {
   const {rows:monitors} = await sql`SELECT * FROM monitor WHERE id=(${id})`
   return monitors[0]
}
export async function updateMonitorById(id:string, name:string, email:string) {
    await sql `UPDATE monitor SET name=${name}, email =${email} WHERE id=${id}`
 }
