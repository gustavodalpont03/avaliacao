import { sql } from "@vercel/postgres";

export async function getAllMonitor(){
    const { rows:monitors } = await sql`SELECT * from monitor`;
    return monitors;
}

export async function addMonitors(name:string, email:string){
    await sql`SELECT INSERT INTO monitors (name, email) VALUES (${name},${email});`
}