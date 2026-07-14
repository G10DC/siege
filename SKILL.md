---
name: siege
description: Run an authorized security test through structured phases — recon → enumerate → analyze → exploit-attempt → report — with scope confirmation, evidence capture, and a repeatable audit trail. Use for authorized pentests, CTFs, and security assessments. Refuse and halt on out-of-scope or unauthorized targets; authorization is a hard precondition, not a nicety.
---

# siege

An authorized test that an auditor can replay. **Authorization and scope are hard gates, not niceties.** This skill is for AUTHORIZED testing, CTFs, and assessments only.

## Golden rules
1. **Authorization first — hard gate.** Before ANY active step, confirm written authorization and the explicit in-scope target list. No authorization → stop. When in doubt, do not act.
2. **Scope is a contract.** Only touch in-scope assets. If a finding leads out of scope, document it and stop — do not pursue.
3. **Structured phases.** recon → enumerate → analyze → (exploit-attempt) → report. Don't jump to exploit before recon/enum are recorded.
4. **Evidence per finding.** Capture command, output, screenshot, timestamp for every finding. No finding without reproducible evidence.
5. **Repeatable, not one-off.** Commands are scripted and versioned; an auditor can replay the whole engagement.
6. **Report as you go.** Record findings incrementally; never defer the entire report to the end.
7. **Authorization must be specific.** Written auth covers scope, time window, permitted techniques, and liability/indemnification — not a generic "you may test."
8. **Chain of custody for evidence.** Hash, timestamp, and store every artifact so its origin and integrity are defensible.
9. **Coordinate before active testing.** Agree a contact, a comms cadence, and an emergency-stop with client IT before any active step.

## Refuse / halt when
- No authorization, or the target is out of scope.
- Asked for detection evasion for malicious purposes, DoS/mass targeting, or anything beyond the authorized engagement.

## When to use
- Authorized pentests, CTF challenges, security assessments with a defined scope and permission.

## When NOT to use
- Anything without explicit authorization. If unsure whether a target is authorized, treat it as not authorized.
