// app/api/scrape/route.js
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import * as cheerio from "cheerio";

export async function GET(req) {
  try {
    // 1. Fetch halaman target (ganti dengan URL nyata)
    const response = await fetch("https://example.com/daftar-agen-labuanbajo");
    const html = await response.text();
    const $ = cheerio.load(html);

    // 2. Ekstrak data (contoh selector, sesuaikan dengan struktur website)
    const agents = [];
    $(".agent-item").each((i, el) => {
      const name = $(el).find(".agent-name").text().trim();
      const location = $(el).find(".agent-location").text().trim();
      const phone = $(el).find(".agent-phone").text().trim();
      if (name) {
        agents.push({ name, location, phone, is_verified: false, source_url: req.url });
      }
    });

    // 3. Simpan ke Supabase (upsert berdasarkan nama)
    for (const agent of agents) {
      const { error } = await supabase
        .from("agents")
        .upsert({ name: agent.name, location: agent.location, phone: agent.phone, is_verified: false }, { onConflict: "name" });
      if (error) console.error("Upsert error:", error);
    }

    // 4. Juga scrape paket wisata jika diperlukan

    return NextResponse.json({ success: true, count: agents.length });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}