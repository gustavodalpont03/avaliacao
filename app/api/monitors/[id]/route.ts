import { deleteMonitors } from "@/app/model/MonitorService"
import { NextResponse } from "next/server"

export async function DELETE(request: Request, {params}:any) {
    console.log(params.id);
    deleteMonitors(params.id);
    return NextResponse.json({sucess:"ok"})
}

