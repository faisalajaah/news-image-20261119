// news-image-20261119 entry, v2 (Node 22, standard library only).
// The entry is a single finished image, entry.png, composed for this bounty:
// a front page summing up the world news of Thursday 19 November 2026.
// v2 refreshes the morning edition with the day's later reporting: the
// Trump–Xi–Putin trilateral in Shenzhen, Netanyahu pressing Trump on Iran
// strikes, Israel's ground operation in Gaza, the Crimean Bridge hit again,
// Anthropic's Nasdaq debut at $83 a share, and the IMF's 4.7% inflation
// warning. This program just places that image where the grader reads it.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);

// The grader sets MAKEFUN_OUTPUT_DIR; default to /output when it does not.
function resolveOutDir() {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

const outDir = resolveOutDir();
const target = join(outDir, "entry.png");

// Make sure the output directory exists, so the program also works
// when the caller did not create it first.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
