// NotFoundError.ts
export class NotFoundError extends Error {
  constructor(resource: string) {
    super(`${resource} no encontrado`)
    this.name = 'NotFoundError'
  }
}

// UnauthorizedError.ts
export class UnauthorizedError extends Error {
  constructor(message = 'No autorizado') {
    super(message)
    this.name = 'UnauthorizedError'
  }
}

// BusinessRuleError.ts
export class BusinessRuleError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BusinessRuleError'
  }
}

// ForbiddenError.ts
export class ForbiddenError extends Error {
  constructor(message = 'Acceso denegado') {
    super(message)
    this.name = 'ForbiddenError'
  }
}