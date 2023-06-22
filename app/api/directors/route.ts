import { getAllDirector, addDirector} from "@/app/model/DirectorService"
import { NextResponse } from "next/server"

export async function GET(){
    const directors = await getAllDirector()
    return NextResponse.json(directors)
}
export async function POST(request:Request){        
        const director= await request.json()
        console.log(director)
        addDirector(director.name, director.email)
        return NextResponse.json({sucess:"ok"})
}