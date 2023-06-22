import { getAllMonitor, addMonitor} from "@/app/model/MonitorService"
import { NextResponse } from "next/server"

export async function GET(){
    const monitors = await getAllMonitor()
    return NextResponse.json(monitors)
}
export async function POST(request:Request){        
        const monitor= await request.json()
        console.log(monitor)
        addMonitor(monitor.name, monitor.description)
        return NextResponse.json({sucess:"ok"})
}