import { sql } from "@vercel/postgres";

export async function getAllMonitor(){
    const { rows:monitors } = await sql`SELECT * from monitor`;
    return monitors;
}

export async function addMonitors(name:string, email:string){
    await sql`SELECT INSERT INTO monitor (name, email) VALUES (${name},${email});`
}

export async function deleteMonitors(id:string){
    await sql`DELETE FROM monitor WHERE id=${id}`;
}