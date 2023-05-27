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

export async function getMonitorById(id:string){
   const {rows:monitor} = await sql`SELECT * FROM monitor WHERE id=${id}`;
   return monitor[0];
}

export async function updateMonitorById(id:string, name:string, email:string){
    await sql`UPDATE monitor SET name=${name}, email=${email} WHERE id=${id}`
}