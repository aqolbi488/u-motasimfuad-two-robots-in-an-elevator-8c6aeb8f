import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "So\u2026 charging later? I wasn't going to mention your 2% beep, but you've been pretending it's your ringtone for three floors. Respect.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
