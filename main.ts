// news-image-20261119 entry (Node 22, standard library only).
// The entry is a single finished image, entry.png, composed for this bounty:
// a front page summing up the world news of Thursday 19 November 2026.
// This program just places that image where the grader reads it.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

// Make sure the output directory exists, so the program also works
// when the caller did not create it first.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
