import { sql } from "@vercel/postgres";

export async function getAllDirector(){
    const { rows:directors } = await sql`SELECT * from director`;
    return directors;
}

export async function addDirectors(name:string, email:string){
    await sql`SELECT INSERT INTO director (name, email) VALUES (${name},${email});`
}

export async function deleteDirectorsById(id:string){
    await sql`DELETE FROM director WHERE id=${id}`;
}

export async function getDirectorById(id:string){
   const {rows:director} = await sql`SELECT * FROM director WHERE id=${id}`;
   return director[0];
}

export async function updateDirectorById(id:string, name:string, email:string){
    await sql`UPDATE director SET name=${name}, email=${email} WHERE id=${id}`
}