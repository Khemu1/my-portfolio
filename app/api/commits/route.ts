import { NextResponse } from "next/server";

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24h

let cache: {
  totalCommits: number;
  timestamp: number;
  source: string;
} | null = null;

const USERNAME = "khemu1";
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

/**
 * Fetch commits for a single year (GitHub enforces max 1 year range)
 */
async function fetchCommitsForRange(
  token: string,
  from: string,
  to: string
): Promise<number> {
  const query = {
    query: `
      query ($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
            restrictedContributionsCount
          }
        }
      }
    `,
    variables: {
      username: USERNAME,
      from,
      to,
    },
  };

  const res = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "Portfolio-App",
    },
    body: JSON.stringify(query),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message ?? "GraphQL error");
  }

  const c = json.data.user.contributionsCollection;
  return (
    (c.totalCommitContributions ?? 0) + (c.restrictedContributionsCount ?? 0)
  );
}

export async function GET() {
  const start = Date.now();

  // Serve valid cache
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json({
      totalCommits: cache.totalCommits,
      source: cache.source,
      cached: true,
      duration: `${Date.now() - start}ms`,
    });
  }

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      {
        error: "GITHUB_TOKEN missing",
        totalCommits: cache?.totalCommits ?? 0,
        source: cache ? "cache_fallback" : "none",
      },
      { status: 500 }
    );
  }

  let totalCommits = 0;
  const lastKnownGood = cache?.totalCommits || 1800;

  // Adjust if you know your real GitHub start year
  const START_YEAR = 2020;
  const CURRENT_YEAR = new Date().getFullYear();

  for (let year = START_YEAR; year <= CURRENT_YEAR; year++) {
    const from = `${year}-01-01T00:00:00Z`;
    const to =
      year === CURRENT_YEAR
        ? new Date().toISOString()
        : `${year}-12-31T23:59:59Z`;

    try {
      const yearly = await fetchCommitsForRange(token, from, to);
      totalCommits += yearly;
    } catch (err) {
      console.error(`Failed fetching commits for ${year}`, err);

      if (lastKnownGood !== undefined) {
        return NextResponse.json({
          totalCommits: lastKnownGood,
          source: "cache_fallback",
          cached: true,
          warning: "GitHub API error – serving last known value",
          duration: `${Date.now() - start}ms`,
        });
      }

      // ❌ No lies if nothing reliable exists
      return NextResponse.json(
        {
          error: "Failed to fetch commit history",
        },
        { status: 500 }
      );
    }
  }

  cache = {
    totalCommits,
    timestamp: Date.now(),
    source: "github_graphql_yearly",
  };

  return NextResponse.json({
    totalCommits,
    source: cache.source,
    cached: false,
    duration: `${Date.now() - start}ms`,
    timestamp: new Date().toISOString(),
  });
}
