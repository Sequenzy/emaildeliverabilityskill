---
name: emaildeliverabilityskill
description: "Use when Codex, Hermes, OpenClaw, Claude Code, Cowork, or another AI agent needs to plan, review, implement, audit, or improve email work focused on inbox placement, authentication, sender reputation, complaint control, and remediation workflows. Triggers include requests about DNS authentication audits, warmup plans, complaint spike triage, blocklist checks, bounce analysis, and reputation recovery."
---

# Email Deliverability Skill

Protect the sender before chasing growth. Separate authentication, reputation, content, list quality, and provider issues before recommending action.

## When To Use

Use this skill for inbox placement, authentication, sender reputation, complaint control, and remediation workflows. It is designed for agent workflows where email work must be specific, reviewable, and safe across planning, drafting, implementation, QA, or operational handoff.

## Operating Workflow

1. Classify the deliverability problem: authentication failure, bounce spike, complaint spike, spam-folder placement, throttling, blocklist, or engagement decay.
2. Collect evidence by domain, provider, segment, campaign, and time window rather than treating all mail as one stream.
3. Check SPF, DKIM, DMARC, custom tracking domain, bounce domain, alignment, and recent DNS changes.
4. Review list acquisition, consent, suppression, frequency, reactivation, and recent imports for reputation risk.
5. Recommend a staged remediation plan with stop-loss thresholds, monitoring cadence, and owner for each action.
6. Keep DNS edits, suppression changes, imports, provider migrations, and production throttling behind explicit approval.

## Review Criteria

- Authentication advice distinguishes missing records from alignment failures.
- Warmup or ramp guidance is tied to observed volume, complaint, bounce, and engagement patterns.
- Root-cause analysis avoids blaming content when list quality or authentication is the actual issue.
- Remediation includes what to pause, what to monitor, and when to resume.
- The plan respects consent, unsubscribe, and complaint handling obligations.

## Output Pattern

Return DNS/authentication audits, reputation triage notes, warmup schedules, suppression reviews, monitoring plans, and remediation runbooks. Keep recommendations concrete. Separate analysis from live-system actions, and require explicit approval before sending email, importing contacts, changing DNS, altering suppression rules, or editing production automations.
