import { fetchQuestions } from "@/lib/data";
import { NextResponse } from "next/server";


export async function GET(request: Request,{ params}:{params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const data = await fetchQuestions(id);

    return NextResponse.json(data);
    } catch (e){
        console.error(e)
    }
}