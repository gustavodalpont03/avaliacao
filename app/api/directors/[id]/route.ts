import { deleteDirectorById, getDirectorById, updateDirectorById } from "@/app/model/DirectorService"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, {params}:any) {
    deleteDirectorById(params.id)
    return NextResponse.json({sucess:"ok"})
}
export async function GET(request:Request, {params}:any) {    
    const director = await getDirectorById(params.id) 
    return NextResponse.json (director);
}
export async function PUT(request:Request, {params}:any) { 
    try{
    const director = await request.json()   
    await updateDirectorById(params.id, director.name, director.email) 
    return NextResponse.json (await getDirectorById(params.id)); 
    } catch (error){
        console.log ("PUT" + error)
    }
}