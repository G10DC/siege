# Scope guard limitations (`lib/recon.js`)

The scope guard does **exact, case-insensitive string matching only**. It does not resolve DNS,
does not understand CIDR ranges, and does not parse URLs — a scheme, path, or port on the target
string makes the match fail and the run aborts.

Concretely this means:
- Normalize every target to a bare hostname or IP before passing it in (`Target.com`, a trailing
  dot, or `https://target.com/path` will all fail to match and abort the run).
- An allowlisted domain that later resolves to a different, out-of-scope IP is **not** detected —
  the guard checks the string you typed, not where it actually resolves.
- A whole subnet cannot be allowlisted; only individual addresses/hostnames.
- Treat this guard as a first check, not the sole boundary of authorization — real scoping
  discipline (written authorization, confirmed target list) still applies on top of it.

This fails CLOSED, not open: the practical risk is a legitimate in-scope target being wrongly
aborted because of a typo/format mismatch, not an out-of-scope target slipping through.
