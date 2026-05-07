// app/api/cron/scrape/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Panggil endpoint scrape internal
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/scrape`);
  const data = await res.json();
  return NextResponse.json(data);
}