# siege

> Authorized security tests through structured phases — recon → enumerate → analyze → exploit → report — with a scope gate and a repeatable audit trail.

`siege` is a Claude Code skill for **authorized** penetration testing, CTFs, and security
assessments. Authorization and scope are hard gates, not niceties; every finding carries
reproducible evidence, and the whole engagement is scripted so an auditor can replay it.
Authorization is a precondition, and out-of-scope or unauthorized targets are refused.

## Install

Copy into `~/.claude/skills/siege/`. Claude Code auto-loads any folder that contains a `SKILL.md`.

## Usage

Opt-in, per turn. Activates for authorized pentests, CTFs, and scoped security assessments.
See `SKILL.md` for the golden rules, the refuse/halt conditions, and when (not) to use it.

## License

MIT — see [LICENSE](./LICENSE).
