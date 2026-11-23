// News-image entry for Monday 23 November 2026 ("The World Today").
// The image is drawn once, checked in as entry.png, and this program
// places an exact copy of it at the grader's output path. No network,
// no randomness, no clock: the same input bytes always produce the
// same output bytes.
//
// Validation: the entry must be a whole JPEG or PNG within the
// competition's limits, so refuse anything else instead of copying
// a broken file to the output path.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
const isPng =
  bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
if (!isJpeg && !isPng) throw new Error("entry.png is not a JPEG or PNG");
if (bytes.length > 1048576) throw new Error("entry.png is over the 1 MiB limit");
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
