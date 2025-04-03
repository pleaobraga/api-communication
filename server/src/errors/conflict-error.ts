export class ConflictError extends Error {
  statusCode: number
  code: string

  constructor(
    message = 'Post already registered.',
    code = 'POST_TITLE_CONFLICT'
  ) {
    super(message)
    this.name = 'ConflictError'
    this.statusCode = 409
    this.code = code
  }
}
