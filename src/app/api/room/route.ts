import { room } from "@/asset/json";

export async function GET() {
  return Response.json(room);
}
