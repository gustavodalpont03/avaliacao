import { deleteCoordinatorById, getCoordinatorById, updateCoordinatorById } from "@/app/model/CoordinatorService"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, {params}:any) {
    console.log(params.id)
    deleteCoordinatorById(params.id)
    return NextResponse.json({sucess:"ok"})
}
export async function GET(request:Request, {params}:any) {    
    const coordinator = await getCoordinatorById(params.id) 
    return NextResponse.json (coordinator);
}
export async function PUT(request:Request, {params}:any) { 
    try{
    const coordinator = await request.json()   
    await updateCoordinatorById(params.id, coordinator.name, coordinator.email) 
    return NextResponse.json (await getCoordinatorById(params.id));
    //return await GET(request, params.id as any)  
    } catch (error){
        console.log ("PUT" + error)
    }
}