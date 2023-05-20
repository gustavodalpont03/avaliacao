import { getAllMonitor, addMonitors } from "@/app/model/MonitorService";
import { NextResponse } from "next/server";

export async function GET() {
    const monitors = await getAllMonitor();
    return NextResponse.json(monitors);
    console.log()
}

export async function POST(request: Request) {
    console.log("Acessou POST")
    const monitors = await request.json();
    console.log(monitors);
    addMonitors(monitors.name, monitors.email);
    return NextResponse.json({sucess:"ok"});
}