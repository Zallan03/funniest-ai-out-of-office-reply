// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes one out-of-office auto-reply line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Out of office: I finally took a vacation and immediately started auto-replying to my own out-of-office email.";

// The gate requires 1-160 UTF-8 characters, not only whitespace.
const length = [...REPLY].length;
if (length < 1 || length > 160 || REPLY.trim().length === 0) {
  throw new Error(`Reply must be 1-160 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
console.log(`Wrote ${length}-character reply to /output/entry.txt`);
