// One Word for the Boss — entry: "ping"
// The boss who pings at all hours: funny, true, fresh. 4 chars (tie-break edge).
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const ENTRY = "ping";

// Gate: exactly one word, 1-30 chars, no spaces — and no hidden
// leading/trailing whitespace (a trimmed entry would change the word).
if (!/^[^\s]{1,30}$/.test(ENTRY)) {
  throw new Error("entry must be a single word of 1-30 characters");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);

// Read-back: verify what landed is byte-identical.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) throw new Error("read-back mismatch");
console.log(`entry: ${back} (${back.length} chars)`);
