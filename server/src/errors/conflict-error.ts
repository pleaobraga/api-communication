export class ConflictError extends Error {
  statusCode: number
  code: string

  constructor(message: string) {
    super(message)
    this.name = 'ConflictError'
    this.statusCode = 409
    this.code = 'POST_TITLE_CONFLICT'
  }
}
