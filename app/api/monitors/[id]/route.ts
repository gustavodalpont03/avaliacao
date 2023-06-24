import { deleteMonitorById, getMonitorById, updateMonitorById } from "@/app/model/MonitorService"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, {params}:any) {
    deleteMonitorById(params.id)
    return NextResponse.json({sucess:"ok"})
}
export async function GET(request:Request, {params}:any) {    
    const monitor = await getMonitorById(params.id) 
    return NextResponse.json (monitor);
}
export async function PUT(request:Request, {params}:any) { 
    try{
    const monitor = await request.json()   
    await updateMonitorById(params.id, monitor.name, monitor.email) 
    return NextResponse.json (await getMonitorById(params.id));
    } catch (error){
        console.log ("PUT" + error)
    }
}