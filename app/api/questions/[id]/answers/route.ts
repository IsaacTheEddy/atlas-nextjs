import { fetchAnswers } from "@/lib/data";
import { NextResponse } from "next/server";


export async function GET(request: Request, context: { params: { id: string } }) {
  try {
    const { id } = await context.params;

    const data = await fetchAnswers(id);

    return NextResponse.json(data);
    } catch (e){
        console.error(e)
    }
}