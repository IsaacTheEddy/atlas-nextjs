import { fetchTopics } from "@/lib/data";

const data = await fetchTopics()
export async function GET(request: Request){
    try{
    return Response.json(data)
    }catch(e){
        console.error(e)
    }
   
}