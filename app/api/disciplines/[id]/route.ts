import { deleteDisciplineById, getDisciplineById, updateDisciplineById } from "@/app/model/DisciplineService"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, {params}:any) {
    console.log(params.id)
    deleteDisciplineById(params.id)
    return NextResponse.json({sucess:"ok"})
}
export async function GET(request:Request, {params}:any) {    
    const discipline = await getDisciplineById(params.id) 
    return NextResponse.json (discipline);
}
export async function PUT(request:Request, {params}:any) { 
    try{
    const discipline = await request.json()   
    await updateDisciplineById(params.id, discipline.name, discipline.description) 
    return NextResponse.json (await getDisciplineById(params.id));
    //return await GET(request, params.id as any)  
    } catch (error){
        console.log ("PUT" + error)
    }
}