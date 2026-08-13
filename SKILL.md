---
name: siege
status: implemented
description: Orchestrates authorized penetration testing — recon, enumeration, vulnerability analysis, safe exploitation validation, and reproducible reporting against explicitly scoped targets. The scope guard is exact-string-match only (no CIDR, no DNS resolution). Use for an authorized security assessment against declared domains/IPs. Never use against a target outside the declared scope; never use for static code review (use mirror) or dependency auditing (use lookout).
---

# siege

An unscoped pentest is an attack, not an assessment. One rule above all: **never touch a target
outside the declared scope, no exceptions, no soft warnings — abort immediately.**

## Golden rules

1. **Scope is declared before execution, not discovered during it.** The initial config defines
   an exact allowlist of domain names and IP address strings — read once, before recon starts.
   Exact-match only, no CIDR/DNS (`refs/scope-guard.md` for the specifics and how to work with it).
2. **Anything not an exact allowlist match aborts, it doesn't warn.** If a target string is not
   found verbatim in the allowlist, `lib/recon.js` halts execution immediately with a safety
   violation — there is no "continue anyway" path.
3. **Exploitation is validation, not damage.** The exploitation phase attempts safe, sandboxed
   exploit code validation — proving exploitability, not causing production impact.
4. **Every finding needs a reproducible trail.** The reporting phase formats evidence so a
   third party can reproduce the finding independently, not just trust the summary.
5. **No administrative escalation leaks.** Sandboxing must contain the assessment — a technique
   that requires escalation beyond the sandbox is out of scope for this skill, not a workaround
   to attempt anyway.

## Process flow
Recon (ports/services) → Enumeration (dirs/subdomains/endpoints) → Analysis (versions vs. CVE
databases) → Exploitation (sandboxed validation only) → Reporting (reproducible evidence).

## Safety

- Scope config (an exact allowlist of domain/IP strings) is mandatory before any recon step runs.
- Any target not an exact, case-insensitive match against that allowlist is an immediate abort,
  not a logged warning. See `refs/scope-guard.md` for the guard's exact limitations.
- Exploitation never targets production data or causes persistent side effects outside the sandbox.

## When to use

- Running an authorized, scoped penetration test against declared targets.
- Validating whether a vulnerability flagged elsewhere (e.g. by `lookout`) is actually
  exploitable in practice.

## When NOT to use

- **The task is static review of your own diff, no live target involved** → use `mirror`.
- **The task is auditing dependency manifests for known CVEs, not probing a live target** →
  use `lookout`. Siege only acts on explicitly scoped, live targets — never on manifests alone.
- **Anything without explicit authorization**. If unsure whether a target is authorized, treat it as not authorized.
