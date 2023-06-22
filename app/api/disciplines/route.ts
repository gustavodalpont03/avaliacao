import { getAllDiscipline, addDiscipline} from "@/app/model/DisciplineService"
import { NextResponse } from "next/server"

export async function GET(){
    const disciplines = await getAllDiscipline()
    return NextResponse.json(disciplines)
    console.log("acessou o get....")

}
export async function POST(request:Request){        
        const discipline= await request.json()
        console.log(discipline)
        addDiscipline(discipline.name, discipline.description)
        return NextResponse.json({sucess:"ok"})
        console.log("acessou o POST....")

}