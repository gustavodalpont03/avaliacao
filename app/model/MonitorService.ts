import { sql } from "@vercel/postgres";

export async function getAllMonitor(){
    const { rows:monitors } = await sql`SELECT * from monitor`;
    return monitors;
}