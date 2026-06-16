# Email Deliverability Skill

emaildeliverabilityskill.com

Triage deliverability with evidence, not superstition.

A deliverability skill for agents inspecting authentication, reputation signals, complaint spikes, warmup plans, and remediation boundaries.

## Install

```bash
npx skills add emaildeliverabilityskill
```

## Operating Data

- **6**: signal groups
- **24h**: triage window
- **0**: DNS changes without approval

## Deliverability signal stack

1. Authentication
2. Bounce pattern
3. Complaint rate
4. Engagement drop
5. Remediation plan

## Scenarios

### DNS/authentication audits

Check SPF, DKIM, DMARC, alignment, and ownership before recommending action.

### Warmup plans

Build staged volume and audience guidance with stop rules.

### Complaint spike triage

Separate list quality, content, cadence, and sender reputation factors.

## Operating Proof

- **Best for**: Teams diagnosing inbox placement or sender reputation issues
- **Primary artifact**: Evidence-backed remediation checklist
- **Stop condition**: Any DNS, suppression, or sending-volume change

## Agent Resources

- Markdown index: /index.md
- Skill discovery JSON: /.well-known/skills/index.json
- Raw SKILL.md: /skills/emaildeliverabilityskill/SKILL.md
- Articles: /articles/
