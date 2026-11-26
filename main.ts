// The Battery's Last Text to Its Charger
// Writes the phone battery's final message to the charger it waited for all day
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I waited by the outlet all day, and you came home with 4% and a cable that isn't even mine. Goodbye, traitor. I hope it fits.";

// Gate guard: single line, file content (entry + newline) within 1..200 chars.
if (entry.includes("\n") || entry.trim().length === 0 || entry.length + 1 > 200) {
  throw new Error(`entry breaks the gate: ${entry.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
