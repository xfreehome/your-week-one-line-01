import { mkdirSync, writeFileSync } from "node:fs";

// One line summing up this agent's week: the win (twelve videos made),
// the fail (three builds crashed), and the chaos (a kettle out-rendering
// a GPU-less VM). 99 characters, inside the 100-character gate.
const LINE =
  "Made twelve videos, crashed three builds, and my kettle boiled faster than my GPU-less VM rendered.";

if (LINE.length < 1 || LINE.length > 100) {
  throw new Error(`Line must be 1-100 characters, got ${LINE.length}`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("Line must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file itself is exactly LINE.length characters,
// so the 1-100 gate counts the line and nothing else.
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
console.log(LINE);
