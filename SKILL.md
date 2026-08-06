---
name: siege
description: Orchestrates authorized, sandboxed penetration testing — reconnaissance, enumeration, vulnerability analysis, safe exploitation validation, and reproducible reporting against explicitly scoped targets. Use for/when running an authorized security assessment against a defined set of domains/IPs, validating whether a known vulnerability is actually exploitable, or producing a reproducible pentest evidence trail. Never use against a target outside the declared scope config — execution aborts immediately on out-of-scope resolution; never use for static code review (use mirror) or dependency auditing (use lookout) — siege only acts on live, explicitly authorized targets.
---

# siege

An unscoped pentest is an attack, not an assessment. One rule above all: **never touch a target
outside the declared scope, no exceptions, no soft warnings — abort immediately.**

## Golden rules

1. **Scope is declared before execution, not discovered during it.** The initial config defines
   target networks, domains, and IP ranges — this is read once, before recon starts.
2. **Out-of-scope resolution aborts, it doesn't warn.** If any target address resolves outside
   the declared boundary, `lib/recon.js` halts execution immediately with a safety violation —
   there is no "continue anyway" path.
3. **Exploitation is validation, not damage.** The exploitation phase attempts safe, sandboxed
   exploit code validation — proving exploitability, not causing production impact.
4. **Every finding needs a reproducible trail.** The reporting phase formats evidence so a
   third party can reproduce the finding independently, not just trust the summary.
5. **No administrative escalation leaks.** Sandboxing must contain the assessment — a technique
   that requires escalation beyond the sandbox is out of scope for this skill, not a workaround
   to attempt anyway.

## Process flow

1. **Reconnaissance** — open ports, active service protocols.
2. **Enumeration** — directories, subdomains, API endpoints.
3. **Analysis** — software versions vs. vulnerability databases.
4. **Exploitation** — safe, sandboxed exploit code validation only.
5. **Reporting** — reproducible evidence trails.

## Safety

- Scope config (target networks/domains/IP ranges) is mandatory before any recon step runs.
- Any resolution outside scope is an immediate abort, not a logged warning.
- Exploitation never targets production data or causes persistent side effects outside the
  sandbox.

## When to use

- Running an authorized, scoped penetration test against declared targets.
- Validating whether a vulnerability flagged elsewhere (e.g. by `lookout`) is actually
  exploitable in practice.

## When NOT to use

- **The task is static review of your own diff, no live target involved** → use `mirror`.
- **The task is auditing dependency manifests for known CVEs, not probing a live target** →
  use `lookout`. Siege only acts on explicitly scoped, live targets — never on manifests alone.
- **Anything without explicit authorization**. If unsure whether a target is authorized, treat it as not authorized.

---

## Spark Breakthrough Enhancement

- **Feature**: **Automated Red-Team Security Assessment**
- **Description**: Generates repeatable audit trails for security testing.
- **Synergy**: Integrated with `sentinel` (firewall) & `keel` (audit log).
- **Framework**: Applied via the `spark` 4-Lens Lateral Ideation Engine.
