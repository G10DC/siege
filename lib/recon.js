/**
 * Siege — Scope Boundary & Target Validation Guard
 */
export class SiegeScopeGuard {
  constructor(scopeConfig = {}) {
    this.allowedDomains = new Set(scopeConfig.allowedDomains || ['localhost', '127.0.0.1']);
  }

  /**
   * Validates if a target domain/IP is within authorized pentest scope.
   * Halts immediately on out-of-scope target.
   */
  validateTarget(target) {
    if (!target) {
      throw new Error('Siege Security Abort: No target specified.');
    }

    const cleanTarget = String(target).trim().toLowerCase();
    if (!this.allowedDomains.has(cleanTarget)) {
      throw new Error(`Siege Security Abort: Target '${target}' is OUT OF SCOPE. Execution halted.`);
    }

    return {
      target,
      inScope: true,
      honest: 'Scope boundary verified before execution.'
    };
  }
}
