import { NextResponse } from "next/server";

const BOOKING_URL = "https://beds24.com/book-stellaharamura";

export async function GET() {
  try {
    const res = await fetch(BOOKING_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; StellaBot/1.0)" },
      next: { revalidate: 1800 }, // 30分キャッシュ
    });

    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

    const html = await res.text();
    const match = html.match(/data\("avail",\s*(\{[^}]+\})/);
    if (!match) throw new Error("Availability data not found in page");

    const avail: Record<string, string> = JSON.parse(match[1]);

    // キーが存在する日 = 空室、値は常に"1"
    const availableDates = Object.keys(avail)
      .filter((d) => avail[d] === "1")
      .sort();

    return NextResponse.json({ availableDates, fetchedAt: new Date().toISOString() });
  } catch (err) {
    console.error("Availability fetch error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
