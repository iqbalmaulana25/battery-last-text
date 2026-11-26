// The Battery's Last Text to Its Charger
// The phone battery's final message to the charger it waited for all day,
// written to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// Setup: a whole day of waiting by the outlet.
const setup =
  "All day I sat by the outlet, and you stroll in at 4% with a cable that isn't even mine.";
// Punchline: the breakup, blamed on the percentage.
const punch = "We're done, traitor. It's not me, it's your 2%.";
const entry = `${setup} ${punch}`;

// Gate guard: single line, file content (entry + newline) within 1..200 chars.
if (entry.includes("\n") || entry.trim().length === 0 || entry.length + 1 > 200) {
  throw new Error(`entry breaks the gate: ${entry.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
