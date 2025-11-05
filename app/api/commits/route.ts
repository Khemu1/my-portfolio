// app/api/commits/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://github-readme-stats-seven-pi-75.vercel.app/api?username=khemu1&count_private=true&include_all_commits=true"
    );
    const svg = await res.text();

    const match = svg.match(
      /<text[^>]*data-testid="commits"[^>]*>([^<]+)<\/text>/
    );
    let totalCommits = 0;

    if (match && match[1]) {
      const raw = match[1].trim();
      totalCommits = raw.endsWith("k")
        ? Math.round(parseFloat(raw) * 1000)
        : parseInt(raw.replace(/,/g, ""), 10);
    }

    return NextResponse.json({ totalCommits });
  } catch (err) {
    console.error("Error fetching commits:", err);
    return NextResponse.json({ totalCommits: 0 }, { status: 500 });
  }
}
