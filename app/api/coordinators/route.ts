import { getAllCoordinator, addCoordinator} from "@/app/model/CoordinatorService"
import { NextResponse } from "next/server"

export async function GET(){
    const coordinators = await getAllCoordinator()
    return NextResponse.json(coordinators)
    console.log("acessou o get....")

}
export async function POST(request:Request){        
        const coordinator= await request.json()
        console.log(coordinator)
        addCoordinator(coordinator.name, coordinator.email)
        return NextResponse.json({sucess:"ok"})
        console.log("acessou o POST....")

}