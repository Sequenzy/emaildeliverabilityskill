import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/email-deliverability/SKILL.md",
  "skills/email-deliverability/agents/openai.yaml",
  "skills/email-deliverability/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/email-deliverability/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: email-deliverability\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add email-deliverability")) throw new Error("Missing install shortcut");
console.log("emaildeliverabilityskill.com ok");
