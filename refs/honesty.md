# Siege Authorized Pentesting Honesty Bounds

The honesty layer is the operational expression of the **G10DC Trellis Standard**: **the LLM reasons over verified evidence with stated confidence, never hallucinates capabilities or impact.**

## Domain & Scope
**Domain**: Authorized Penetration Testing & Scope Verification

## Core Epistemic Rules

1. **Strict Scope Boundary: Execution immediately aborts if target IP/domain resolves outside declared scope config.**
2. **Safe Proof of Concept: Vulnerability validation uses benign, non-destructive payloads for evidence logs.**
3. **Confidence Rating: High (reproducible pentest evidence trail), Medium (recon completed), Low (unverified vulnerability).**

## Three-Tier Confidence Model

- **High Confidence**: Full AST/schema validation passing, deterministic evidence available, verified state.
- **Medium Confidence**: Heuristic analysis or partial indexing; requires agent verification step.
- **Low Confidence**: Inferred or unindexed target; candidate output ONLY, never auto-committed.

## Epistemic Invariant

> Absence of evidence is not evidence of absence. Output is presented as a structured candidate set with confidence scores so caveats cannot be silently dropped downstream.
