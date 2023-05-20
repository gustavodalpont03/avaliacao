import { getAllStudent } from "@/app/model/StudentService";
import { getAllMonitor } from "@/app/model/MonitorService";
import { NextResponse } from "next/server";

export async function GET() {
    const monitors = await getAllMonitor();
    return NextResponse.json(monitors);
    console.log()
}

export async function POST() {
    console.log("Acessou POST")
    return NextResponse.json({sucess:"ok"});
}