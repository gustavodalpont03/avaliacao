import { getAllMonitor, addMonitors } from "@/app/model/MonitorService";
import { NextResponse } from "next/server";

export async function GET() {
    const monitors = await getAllMonitor();
    return NextResponse.json(monitors);
}

export async function POST(request: Request) {
    const monitors = await request.json();
    addMonitors(monitors.name, monitors.email);
    return NextResponse.json({sucess:"ok"});
}