// The Battery's Last Text to Its Charger
// The phone battery's final message to the charger it waited for all day,
// written to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// Competition: The Battery's Last Text to Its Charger.
// Setup: a whole day of waiting by the outlet.
const SETUP_LINE =
  "All day I sat by the outlet, and you stroll in at 4% like that's normal, with a cable that isn't even mine.";
const setup: string = SETUP_LINE;
// Punchline: the breakup, blamed on the percentage.
const punch = "We're done, traitor. Don't text back — it's not me, it's your 2%.";
const entry = `${setup} ${punch}`;

// Gate guard: single line, file content (entry + newline) within 1..200 chars.
if (entry.includes("\n") || entry.trim().length === 0 || entry.length + 1 > 200) {
  throw new Error(`entry breaks the gate: ${entry.length} characters`);
}

function main(): void {
  if (entry.length > 199) throw new Error("entry exceeds the 200-char gate");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
  console.log(entry);
}

main();
